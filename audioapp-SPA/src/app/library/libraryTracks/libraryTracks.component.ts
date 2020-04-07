import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../_services/track.service';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-libraryTracks',
  templateUrl: './libraryTracks.component.html',
  styleUrls: ['./libraryTracks.component.css']
})
export class LibraryTracksComponent implements OnInit {
  tracks: any;
  faArrowAltCircleDown = faArrowCircleDown;
  constructor(public trackService: TrackService, private authService: AuthService) { }

  ngOnInit() {
    this.trackService.userTracksUIupdate.subscribe(() => {
      this.getTracksOfUser();
    });
    if (this.authService.loggedIn()) {
      this.getTracksOfUser();
    }
  }

  getTracksOfUser() {
    this.trackService.getTracksOfUser().subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }
}
