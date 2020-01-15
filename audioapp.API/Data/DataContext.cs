using audioapp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace audioapp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        public DbSet<Track> Tracks { get; set; }        
        public DbSet<User> Users { get; set; }
    }
}