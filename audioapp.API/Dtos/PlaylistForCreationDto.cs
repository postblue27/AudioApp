using System;

namespace audioapp.API.Dtos
{
    public class PlaylistForCreationDto
    {
        public string PlaylistName { get; set; }
        public string PlaylistDesc { get; set; }
        public DateTime DateCreated { get; set; }
        public PlaylistForCreationDto()
        {
            DateCreated = DateTime.Now;
        }
    }
}