using System.Collections.Generic;

namespace audioapp.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public ICollection<Track> UploadedTracks { get; set; }
        public ICollection<UserPlaylist> UserPlaylists { get; set; }
    }
}