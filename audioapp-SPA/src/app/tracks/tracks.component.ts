import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  constructor(private http: HttpClient) { }
  tracks: any;
  ngOnInit() {
    this.getTracks();
  }

  getTracks() {
    this.http.get('http://localhost:5000/api/audio').subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }

}
