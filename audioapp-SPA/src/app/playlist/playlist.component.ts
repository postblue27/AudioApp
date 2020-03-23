import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../_services/playlist.service';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  tracks: any;
  playlist: any;
  constructor(public playlistService: PlaylistService, public trackService: TrackService) { }

  ngOnInit() {
    this.playlistService.getPlaylist(this.playlistService.currentPlaylistId).subscribe(response => {
      this.playlist = response;
    }, error => {
      console.log(error);
    });
    this.playlistService.getTracksOfPlaylist(this.playlistService.currentPlaylistId).subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }
}
