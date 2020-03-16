using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using audioapp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace audioapp.API.Data
{
    public class AppRepository : IAppRepository
    {
        private readonly DataContext _context;
        public AppRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(t => t.UploadedTracks).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(t => t.UploadedTracks).ToListAsync();

            return users;
        }

        public async Task<Track> GetTrack(int id)
        {
            var track = await _context.Tracks.FirstOrDefaultAsync(t => t.TrackId == id);

            return track;
        }

        public async Task<List<Track>> GetTracks()
        {
            var tracksList = await _context.Tracks.Include(t => t.User).ToListAsync();
            
            return tracksList;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0; // will return true if there is more than 0 changes
        }
        public async Task<List<Track>> GetTracksOfUser(int id)
        {
            var tracksOfUser = await _context.Tracks.Where(t => t.UserId == id).ToListAsync();
            return tracksOfUser;
        }

        public async Task<List<Playlist>> GetPlaylistsOfUser(int id)
        {
            var playlistsOfUser = await _context.Playlists.Where(p => p.UserId == id).ToListAsync();
            return playlistsOfUser;
        }
    }
}