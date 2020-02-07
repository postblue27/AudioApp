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
    }
}