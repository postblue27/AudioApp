using audioapp.API.Data;
using audioapp.API.Dtos;
using audioapp.API.Helpers;
using audioapp.API.Models;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Security.Claims;
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
        private readonly IAppRepository _repo;

        public AudioController(DataContext conetxt, IAppRepository repo, IMapper mapper,
        IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _repo = repo;
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
        [Authorize]
        [HttpGet("{id}", Name = "GetTrack")]
        public async Task<IActionResult> GetTrack(int id)
        {
            var trackFromRepo = await _repo.GetTrack(id);

            var track = _mapper.Map<TrackForReturnDto>(trackFromRepo);

            return Ok(track);
        }

        [HttpGet]
        public async Task<IActionResult> GetTracks()
        {
            var tracks = await _repo.GetTracks();

            return Ok(tracks);
        }
        [Authorize]
        [HttpPost]
        [Route("{userId}")]
        public async Task<IActionResult> AddTrackForUserAsync(int userId, [FromForm]TrackForCreationDto trackForCreationDto)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(userId);

            var file = trackForCreationDto.File;    

            var uploadResult = new VideoUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
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

            //_context.Tracks.Add(track);
            //_repo.Add(track);
            userFromRepo.Tracks.Add(track);

            var trackForReturn = _mapper.Map<TrackForReturnDto>(track);

            //_context.SaveChanges();
            if (await _repo.SaveAll()){
                return CreatedAtRoute("GetTrack", new {id = track.TrackId}, trackForReturn);
            }

            return BadRequest("ff");
        }  
    }
}