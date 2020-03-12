using System.Collections.Generic;

namespace audioapp.API.Models
{
    public class playlistt
    {
        public int playlisttId { get; set; }
        public ICollection<usertplaylistt> UserPlylists { get; set; }
    }
}