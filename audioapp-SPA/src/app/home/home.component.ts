import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { inherits } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  tracks: any;
  faPlay = faPlay;
  faPause = faPause;
  faArrowAltCircleDown = faArrowCircleDown;
  activeTrackColor = 'rgb(70, 0, 100)';
  @Output() activeTrack = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTracks();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getTracks() {
    this.http.get('http://localhost:5000/api/audio').subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }

  addListeners() {
    const trackDivs = document.getElementsByClassName('trackDiv');
    console.log(trackDivs.length);
    for (let i = 0; i < trackDivs.length; i++) {
      const current = trackDivs[i] as HTMLElement;
      current.addEventListener('click', () => {
        current.style.backgroundColor = 'grey';
        console.log(current);
      });
    }
  }

  trackDivClick(id: string) {
    const trackDiv = document.getElementById(id);
    const trackDivs = document.getElementsByClassName('trackDiv');
    for (let i = 0; i < trackDivs.length; i++) {
      const current = trackDivs[i] as HTMLElement;
      current.style.backgroundColor = 'inherit';
      current.style.borderBottom = '1px solid rgb(45,45,45)';
    }
    trackDiv.style.backgroundColor = this.activeTrackColor;
    trackDiv.style.borderBottom = '1px solid rgb(180, 0, 255)';
  }

  trackDivMouseOver(id: string) {
    const trackDiv = document.getElementById(id);
    if (trackDiv.style.backgroundColor !== this.activeTrackColor) {
      trackDiv.style.backgroundColor = 'rgb(40,40,40)';
    }
  }

  trackDivMouseOut(id: string) {
    const trackDiv = document.getElementById(id);
    if(trackDiv.style.backgroundColor !== this.activeTrackColor) {
      trackDiv.style.backgroundColor = 'inherit';
    }
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  passActiveTrackSrc(track: any) {
    this.activeTrack.emit(track);
  }
}
