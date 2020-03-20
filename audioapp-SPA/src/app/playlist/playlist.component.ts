import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../_services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(public playlistService: PlaylistService) { }

  ngOnInit() {
    this.playlistService.getPlaylist(this.playlistService.currentPlaylistId).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
