using System.Collections.Generic;

namespace audioapp.API.Models
{
    public class usert
    {
        public int usertId { get; set; }
        public ICollection<usertplaylistt> UserPlylists { get; set; }
    }
}