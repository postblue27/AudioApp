import { Component, OnInit } from '@angular/core';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-addTracksToPlaylist',
  templateUrl: './addTracksToPlaylist.component.html',
  styleUrls: ['./addTracksToPlaylist.component.css']
})
export class AddTracksToPlaylistComponent implements OnInit {
  tracks: any;

  constructor(public trackService: TrackService) { }

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

}
