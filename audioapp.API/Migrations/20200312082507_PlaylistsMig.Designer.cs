﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using audioapp.API.Data;

namespace audioapp.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200312082507_PlaylistsMig")]
    partial class PlaylistsMig
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0");

            modelBuilder.Entity("audioapp.API.Models.Playlist", b =>
                {
                    b.Property<int>("PlaylistId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<string>("PlaylistDesc")
                        .HasColumnType("TEXT");

                    b.Property<string>("PlaylistName")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("PlaylistId");

                    b.HasIndex("UserId");

                    b.ToTable("Playlists");
                });

            modelBuilder.Entity("audioapp.API.Models.PlaylistTrack", b =>
                {
                    b.Property<int>("PlaylistId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TrackId")
                        .HasColumnType("INTEGER");

                    b.HasKey("PlaylistId", "TrackId");

                    b.HasIndex("TrackId");

                    b.ToTable("PlaylistTracks");
                });

            modelBuilder.Entity("audioapp.API.Models.Track", b =>
                {
                    b.Property<int>("TrackId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateAdded")
                        .HasColumnType("TEXT");

                    b.Property<string>("PerformerName")
                        .HasColumnType("TEXT");

                    b.Property<string>("PublicId")
                        .HasColumnType("TEXT");

                    b.Property<string>("TrackName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Url")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("TrackId");

                    b.HasIndex("UserId");

                    b.ToTable("Tracks");
                });

            modelBuilder.Entity("audioapp.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("audioapp.API.Models.UserPlaylist", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PlaylistId")
                        .HasColumnType("INTEGER");

                    b.HasKey("UserId", "PlaylistId");

                    b.HasIndex("PlaylistId");

                    b.ToTable("UserPlaylists");
                });

            modelBuilder.Entity("audioapp.API.Models.Playlist", b =>
                {
                    b.HasOne("audioapp.API.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("audioapp.API.Models.PlaylistTrack", b =>
                {
                    b.HasOne("audioapp.API.Models.Playlist", "Playlist")
                        .WithMany("PlaylistTracks")
                        .HasForeignKey("PlaylistId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("audioapp.API.Models.Track", "Track")
                        .WithMany("PlaylistTracks")
                        .HasForeignKey("TrackId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("audioapp.API.Models.Track", b =>
                {
                    b.HasOne("audioapp.API.Models.User", "User")
                        .WithMany("UploadedTracks")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("audioapp.API.Models.UserPlaylist", b =>
                {
                    b.HasOne("audioapp.API.Models.Playlist", "Playlist")
                        .WithMany("UserPlaylists")
                        .HasForeignKey("PlaylistId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("audioapp.API.Models.User", "User")
                        .WithMany("UserPlaylists")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
