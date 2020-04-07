import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../_services/track.service';
import { PlaylistService } from '../../_services/playlist.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addTracksToPlaylist',
  templateUrl: './addTracksToPlaylist.component.html',
  styleUrls: ['./addTracksToPlaylist.component.css']
})
export class AddTracksToPlaylistComponent implements OnInit {
  tracks: any;

  constructor(public trackService: TrackService, public playlistService: PlaylistService, private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.getTracks();
  }

  getTracks() {
    this.trackService.getTracks().subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }

  addTrackToPlaylist(trackId: number, playlistId: number) {
    this.playlistService.addTrackToPlaylist(trackId, playlistId).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  close() {
    this.playlistService.tracksAddedToPlaylistUpdate.emit();
    this.location.back();
  }
}
