
namespace audioapp.API.Models
{
    public class usertplaylistt
    {
        public int usertId { get; set; }
        public usert Usert { get; set; }

        public int playlisttId { get; set; }
        public playlistt Playlistt { get; set; }
    }
}