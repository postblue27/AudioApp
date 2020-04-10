import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../_services/playlist.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Location } from '@angular/common';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-add-exact-track-to-playlist',
  templateUrl: './add-exact-track-to-playlist.component.html',
  styleUrls: ['./add-exact-track-to-playlist.component.css']
})
export class AddExactTrackToPlaylistComponent implements OnInit {
  track: any;
  playlists: any;

  constructor(public playlistService: PlaylistService, public trackService: TrackService, private authService: AuthService,
    private router: Router, private alertify: AlertifyService, private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    this.route.data.subscribe(response => {
      this.track = response.track;
      console.log(response);
    }, error => {
      console.log(error);
    });
    this.playlistService.userPlaylistsUIupdate.subscribe(() => {
      this.getPlaylists();
    });
    if (this.authService.loggedIn()) {
      this.getPlaylists();
    }
  }

  getPlaylists() {
    this.playlistService.getPlaylists().subscribe(response => {
      this.playlists = response;
    }, error => {
      console.log(error);
    });
  }

  addToPlaylist(playlistId: any) {
    this.playlistService.addTrackToPlaylist(this.track.trackId, playlistId).subscribe(response => {
      this.alertify.success('Track successfully added');
    }, error => {
      this.alertify.error('Failed to add track');
    });
  }

  back() {
    this.location.back();
  }
}
