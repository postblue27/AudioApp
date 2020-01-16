using System.Threading.Tasks;
using audioapp.API.Data;
using audioapp.API.Dtos;
using audioapp.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace audioapp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IMapper _mapper;
        public AuthController(IAuthRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if(await _repo.UserExists(userForRegisterDto.Username))
                return BadRequest("User already exists.");

            var userToCreate = new User
            {
                UserName = userForRegisterDto.Username
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return Ok(201);
        }
    }
}