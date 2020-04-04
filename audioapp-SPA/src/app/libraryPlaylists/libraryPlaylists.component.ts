import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../_services/playlist.service';
import { AuthService } from '../_services/auth.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libraryPlaylists',
  templateUrl: './libraryPlaylists.component.html',
  styleUrls: ['./libraryPlaylists.component.css']
})
export class LibraryPlaylistsComponent implements OnInit {
  playlists: any;
  faPlus = faPlus;

  constructor(public playlistService: PlaylistService, private authService: AuthService,
    private router: Router) {
     }

  ngOnInit() {
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
}
