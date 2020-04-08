import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../_services/playlist.service';
import { TrackService } from '../../_services/track.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  tracks: any;
  playlist: any;
  constructor(public playlistService: PlaylistService, public trackService: TrackService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(response => {
      this.playlist = response.playlist;
      this.getTracksOfPlaylist();
    }, error => {
      console.log(error);
    });
    this.playlistService.tracksAddedToPlaylistUpdate.subscribe(() => {
      this.getTracksOfPlaylist();
    });
  }
  getTracksOfPlaylist() {
    this.playlistService.getTracksOfPlaylist(this.playlist.playlistId).subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }
  backToPlaylistsClick() {
    this.router.navigateByUrl('/library/playlists');
  }
}
