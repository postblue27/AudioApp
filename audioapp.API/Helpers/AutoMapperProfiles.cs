using audioapp.API.Dtos;
using audioapp.API.Models;
using AutoMapper;

namespace audioapp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Track, TrackForReturnDto>();
            CreateMap<TrackForCreationDto, Track>();
        }
    }
}