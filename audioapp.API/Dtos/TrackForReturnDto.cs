using System;

namespace audioapp.API.Dtos
{
    public class TrackForReturnDto
    {
        public int TrackId { get; set; }
        public string TrackName { get; set; }
        public string PerformerName { get; set; }
        public DateTime DateAdded { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public int UserId { get; set; }
        public string UploaderUserName { get; set; }
        
    }
}