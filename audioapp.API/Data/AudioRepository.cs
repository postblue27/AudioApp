using System.Threading.Tasks;
using audioapp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace audioapp.API.Data
{
    public class AudioRepository : IAudioRepository
    {
        private readonly DataContext _context;
        public AudioRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Track> GetTrack(int id)
        {
            var track = await _context.Tracks.FirstOrDefaultAsync(t => t.TrackId == id);

            return track;
        }
    }
}