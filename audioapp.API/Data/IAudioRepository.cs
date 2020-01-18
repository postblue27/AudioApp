using System.Collections.Generic;
using System.Threading.Tasks;
using audioapp.API.Models;

namespace audioapp.API.Data
{
    public interface IAudioRepository
    {
        Task<Track> GetTrack(int id);
        Task<List<Track>> GetTracks();
    }
}