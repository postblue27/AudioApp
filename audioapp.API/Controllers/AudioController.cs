using audioapp.API.Data;
using audioapp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;



namespace audioapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AudioController : ControllerBase
    {
        private readonly DataContext _context;
        public AudioController(DataContext conetxt){
            _context = conetxt;
        }
        [HttpGet]
        public async Task<IActionResult> GetAudio(){
            var tracks = await _context.Tracks.ToListAsync();
            return Ok(tracks);
        }
    }
}