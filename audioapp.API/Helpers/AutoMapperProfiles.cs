using audioapp.API.Dtos;
using audioapp.API.Models;
using AutoMapper;

namespace audioapp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Track, TrackForReturnDto>().ForMember(dest => dest.UploaderUserName, 
                opt => opt.MapFrom(src => src.User.UserName));
            CreateMap<TrackForCreationDto, Track>();
            CreateMap<User, UserForListDto>();
            CreateMap<PlaylistForCreationDto, Playlist>();
        }
    }
}