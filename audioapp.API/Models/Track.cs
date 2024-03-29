using System;
using System.Collections.Generic;

namespace audioapp.API.Models
{
    public class Track
    {
        public int TrackId { get; set; }
        public string TrackName { get; set; }
        public string PerformerName { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public DateTime DateAdded { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<PlaylistTrack> PlaylistTracks { get; set; }
    }
}