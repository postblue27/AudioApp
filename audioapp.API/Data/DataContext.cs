using audioapp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace audioapp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        public DbSet<Track> Tracks { get; set; }        
        public DbSet<User> Users { get; set; }
        public DbSet<Playlist> Playlists { get; set; }
        public DbSet<UserPlaylist> UserPlaylists { get; set; }
        public DbSet<PlaylistTrack> PlaylistTracks { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserPlaylist>()
                .HasKey(up => new { up.UserId, up.PlaylistId });  
            modelBuilder.Entity<UserPlaylist>()
                .HasOne(up => up.User)
                .WithMany(u => u.UserPlaylists)
                .HasForeignKey(up => up.UserId);  
            modelBuilder.Entity<UserPlaylist>()
                .HasOne(up => up.Playlist)
                .WithMany(c => c.UserPlaylists)
                .HasForeignKey(up => up.PlaylistId);

            modelBuilder.Entity<PlaylistTrack>()
                .HasKey(pt => new { pt.PlaylistId, pt.TrackId });  
            modelBuilder.Entity<PlaylistTrack>()
                .HasOne(pt => pt.Playlist)
                .WithMany(p => p.PlaylistTracks)
                .HasForeignKey(pt => pt.PlaylistId);  
            modelBuilder.Entity<PlaylistTrack>()
                .HasOne(pt => pt.Track)
                .WithMany(t => t.PlaylistTracks)
                .HasForeignKey(pt => pt.TrackId);
        }
    }
}