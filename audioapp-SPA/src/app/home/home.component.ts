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
  activeTrack: any;
  faPlay = faPlay;
  faPause = faPause;
  faArrowAltCircleDown = faArrowCircleDown;
  activeTrackColor = 'rgb(70, 0, 100)';
  // @Output() activeTrack = new EventEmitter();

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
    const downloadButtons = document.getElementsByClassName('downloadIcon');
    const homeDiv = document.getElementById('homeDiv');
    for (let i = 0; i < downloadButtons.length; i++) {
      const current = downloadButtons[i];
      
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
    if (trackDiv.style.backgroundColor !== this.activeTrackColor) {
      trackDiv.style.backgroundColor = 'inherit';
    }
  }

  downloadIconMouseOver(e: Event) {
    e.stopPropagation();
  }

  modifyHref(url: string, e: Event, pName: string, tName: string) {
    e.stopPropagation();
    const link = e.currentTarget as HTMLLinkElement;
    const index = url.indexOf('upload/');
    const newLink = url.substring(0, index + 7) + 'fl_attachment:' + pName + ' - '
      + tName + '/' + url.substring(index + 7, url.length);
    console.log('found' + newLink);
    link.href = newLink;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  passActiveTrackSrc(track: any) {
    // this.activeTrack.emit(track);
    this.activeTrack = track;
  }

  

  passActiveTrack(track: any) {
    this.activeTrack = track;
  }
}
