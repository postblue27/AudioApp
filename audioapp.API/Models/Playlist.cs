using System;
using System.Collections.Generic;

namespace audioapp.API.Models
{
    public class Playlist
    {
        public int PlaylistId { get; set; }
        public string PlaylistName { get; set; }
        public string PlaylistDesc { get; set; }
        public ICollection<PlaylistTrack> PlaylistTracks { get; set; }
        public DateTime DateCreated { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<UserPlaylist> UserPlaylists { get; set; }
    }
}