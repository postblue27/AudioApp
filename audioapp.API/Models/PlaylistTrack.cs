namespace audioapp.API.Models
{
    public class PlaylistTrack
    {
        public int TrackId { get; set; }
        public Track Track { get; set; }

        public int PlaylistId { get; set; }
        public Playlist Playlist { get; set; }
    }
}