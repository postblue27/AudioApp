import { Component, OnInit } from '@angular/core';
import { TrackService } from '../_services/track.service';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-libraryTracks',
  templateUrl: './libraryTracks.component.html',
  styleUrls: ['./libraryTracks.component.css']
})
export class LibraryTracksComponent implements OnInit {
  tracks: any;
  faArrowAltCircleDown = faArrowCircleDown;
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
