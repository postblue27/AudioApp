using System.Collections.Generic;
using audioapp.API.Models;

namespace audioapp.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public ICollection<Track> Tracks { get; set; }
    }
}