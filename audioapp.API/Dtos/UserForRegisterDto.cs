using System.ComponentModel.DataAnnotations;

namespace audioapp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 6, ErrorMessage = "Password must be between 6 and 16 characters length.")]
        public string Password { get; set; }
    }
}