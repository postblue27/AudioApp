using audioapp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace audioapp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        public DbSet<Track> Tracks { get; set; }        
        public DbSet<User> Users { get; set; }
        public DbSet<usert> userts { get; set; }
        public DbSet<playlistt> plsylistts { get; set; }
        public DbSet<usertplaylistt> userPlaylists {get; set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<usertplaylistt>()
                .HasKey(bc => new { bc.usertId, bc.playlisttId });  
            modelBuilder.Entity<usertplaylistt>()
                .HasOne(bc => bc.Usert)
                .WithMany(b => b.UserPlylists)
                .HasForeignKey(bc => bc.usertId);  
            modelBuilder.Entity<usertplaylistt>()
                .HasOne(bc => bc.Playlistt)
                .WithMany(c => c.UserPlylists)
                .HasForeignKey(bc => bc.playlisttId);
        }
    }
}