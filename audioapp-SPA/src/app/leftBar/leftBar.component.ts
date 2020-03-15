import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from '../_services/playlist.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-leftBar',
  templateUrl: './leftBar.component.html',
  styleUrls: ['./leftBar.component.css']
})
export class LeftBarComponent implements OnInit {
  faHome = faHome;
  faEnvelope = faEnvelope;
  faCompactDisc = faCompactDisc;
  faUser = faUser;
  faPlus = faPlus;
  playlists: any;
  constructor(public playlistService: PlaylistService, private authService: AuthService) { }

  ngOnInit() {
      this.playlistService.userPlaylistsUIupdate.subscribe(() => {
        console.log('update');
        this.getPlaylists();
      });
      if (this.authService.loggedIn()) {
        this.getPlaylists();
      }
  }
  getPlaylists() {
    this.playlistService.getPlaylists().subscribe(response => {
      this.playlists = response;
      console.log(this.playlists);
    }, error => {
      console.log(error);
    });
  }
  loggedIn() {
    // if(this.authService.loggedIn()){
    //   this.getPlaylists();
    //   console.log('loggedin');
    // }
    return this.authService.loggedIn();
  }
}
