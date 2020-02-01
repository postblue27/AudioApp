import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  activeTrack: any;
  activeTrackUpdated: EventEmitter<any> = new EventEmitter();
  constructor() { }

  setActiveTrack(track: any) {
    this.activeTrack = track;
    this.activeTrackUpdated.emit(this.activeTrack);
  }
}
