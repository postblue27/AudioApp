using System.Security.Claims;
using System.Threading.Tasks;
using audioapp.API.Data;
using audioapp.API.Dtos;
using audioapp.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace audioapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IAppRepository _repo;

        public PlaylistController(DataContext conetxt, IAppRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
            _context = conetxt;
        }
        [Authorize]
        [HttpPost]
        [Route("{userId}")]
        public async Task<IActionResult> AddPlaylistForUser([FromBody]PlaylistForCreationDto playlistForCreation, int userId)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(userId);

            var playlist = _mapper.Map<Playlist>(playlistForCreation);
            playlist.User = userFromRepo;
            _repo.Add(playlist);
            
            if (await _repo.SaveAll()){
                return Ok(playlist);
            }
            return Ok(500);
        }
        [Authorize]
        [HttpGet]
        [Route("{userId}")]
        public async Task<IActionResult> GetPlaylistsOfUser(int userId)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var playlistsOfUser =  await _repo.GetPlaylistsOfUser(userId);
            return Ok(playlistsOfUser);
        }
        [Authorize]
        [HttpGet]
        [Route("exact/{playlistId}")]
        public async Task<IActionResult> GetPlaylistOfUser(int playlistId)
        {
            var playlist = await _repo.GetPlaylist(playlistId);
            return Ok(playlist);
        }

        [Authorize]
        [HttpPost]
        [Route("{userId}/add/{playlistId}/{trackId}")]
        public async Task<IActionResult> AddTrackToPlaylist([FromBody]PlaylistTrack playlistTrackToAdd, int userId)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            _repo.Add(playlistTrackToAdd);
            if (await _repo.SaveAll()){
                return Ok();
            }
            return Ok(500);
        }
    }
}