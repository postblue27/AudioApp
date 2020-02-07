using System;
using Microsoft.AspNetCore.Http;

namespace audioapp.API.Dtos
{
    public class TrackForCreationDto
    {
        public string TrackName { get; set; }
        public string PerformerName { get; set; }
        public string Url { get; set; }
        public DateTime DateAdded { get; set; }
        public IFormFile File { get; set; }
        public string PublicId { get; set; }
        public TrackForCreationDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}