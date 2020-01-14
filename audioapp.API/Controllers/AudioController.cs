using audioapp.API.Data;
using audioapp.API.Dtos;
using audioapp.API.Helpers;
using audioapp.API.Models;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Threading.Tasks;



namespace audioapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AudioController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public AudioController(DataContext conetxt, IMapper mapper,
        IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _cloudinaryConfig = cloudinaryConfig;
            _mapper = mapper;
            _context = conetxt;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);
        }

        [HttpPost]
        public async Task<IActionResult> AddTrack(TrackForCreationDto trackForCreationDto)
        {
            var file = trackForCreationDto.File;

            var uploadResult = new VideoUploadResult();

            if(file.Length > 0)
            {
                using(var stream = file.OpenReadStream())
                {
                    var uploadParams = new VideoUploadParams()
                    {
                        File = new FileDescription(file.Name, stream)
                    };

                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }

            trackForCreationDto.Url = uploadResult.Uri.ToString();
            trackForCreationDto.PublicId = uploadResult.PublicId;

            var track = _mapper.Map<Track>(trackForCreationDto);

            _context.Tracks.Add(track);

            _context.SaveChanges();

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAudio()
        {
            var tracks = await _context.Tracks.ToListAsync();
            return Ok(tracks);
        }
    }
}