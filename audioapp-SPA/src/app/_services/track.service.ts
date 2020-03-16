import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  activeTrack: any;
  activeTrackUpdated: EventEmitter<any> = new EventEmitter();
  activeTrackColor = 'rgb(70, 0, 100)';
  constructor(private http: HttpClient) { }

  getTracks() {
    return this.http.get('http://localhost:5000/api/audio');
  }

  setActiveTrack(track: any) {
    this.activeTrack = track;
    this.activeTrackUpdated.emit(this.activeTrack);
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
