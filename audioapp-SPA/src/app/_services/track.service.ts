import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  activeTrack: any;
  activeTrackUpdated: EventEmitter<any> = new EventEmitter();
  activeTrackColor = 'rgb(70, 0, 100)';
  userTracksUIupdate: EventEmitter<any> = new EventEmitter();
  faArrowAltCircleDown = faArrowCircleDown;
  faPlay = faPlay;
  faPause = faPause;
  faTimes = faTimes;
  faSearch = faSearch;
  faPlus = faPlus;
  constructor(private http: HttpClient, private authService: AuthService) { }

  getTracks() {
    return this.http.get('http://localhost:5000/api/audio');
  }

  getTracksOfUser() {
    return this.http.get('http://localhost:5000/api/audio/user/' + this.authService.decodedToken.nameid);
  }

  setActiveTrack(track: any) {
    this.activeTrack = track;
    this.activeTrackUpdated.emit(this.activeTrack);
  }

  isTrackActive(track: any) {
    if (track === this.activeTrack) {
      return true;
    } else {
      return false;
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
    // console.log('found' + newLink);
    link.href = newLink;
  }
}
