import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from '../../_services/playlist.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-playlistCreation',
  templateUrl: './playlistCreation.component.html',
  styleUrls: ['./playlistCreation.component.css']
})
export class PlaylistCreationComponent implements OnInit {
  faTimes = faTimes;
  model: any = {};
  constructor(public playlistService: PlaylistService, private router: Router, private location: Location) { }

  ngOnInit() {
  }
  
  createPlaylist() {
    this.playlistService.createPlaylist(this.model).subscribe(() => {
      console.log('creation success');
      this.playlistService.userPlaylistsUIupdate.emit();
      this.playlistService.getPlaylists();
    }, error => {
      console.log(error);
    });
  }
  close() {
    this.location.back();
  }
}
