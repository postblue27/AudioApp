namespace audioapp.API.Models
{
    public class UserPlaylist
    {
        public int UserId { get; set; }
        public User User { get; set; }

        public int PlaylistId { get; set; }
        public Playlist Playlist { get; set; }
    }
}