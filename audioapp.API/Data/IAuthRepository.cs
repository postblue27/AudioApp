using System.Threading.Tasks;
using audioapp.API.Models;

namespace audioapp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<bool> UserExists(string username);
    }
}