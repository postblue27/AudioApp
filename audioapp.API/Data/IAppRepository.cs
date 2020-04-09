using System.Collections.Generic;
using System.Threading.Tasks;
using audioapp.API.Models;

namespace audioapp.API.Data
{
    public interface IAppRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll(); 
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<Track> GetTrack(int id);
        Task<List<Track>> GetTracks();
        Task<List<Track>> GetTracksOfUser(int id);
        Task<List<Playlist>> GetPlaylistsOfUser(int id);
        Task<Playlist> GetPlaylist(int playlistId);
        Task<List<Track>> GetTracksOfPlaylist(int playlistId);
        Task<List<Track>> GetTracksBySearchString(string searchString);
    }
}