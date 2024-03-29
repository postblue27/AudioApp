import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
