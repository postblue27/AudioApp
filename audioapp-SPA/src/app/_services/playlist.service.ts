import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  creationMode = false;
  baseUrl = environment.apiUrl;
  userPlaylistsUIupdate: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient, private authService: AuthService) { }

  disableCreationMode() {
    this.creationMode = false;
  }
  enableCreationMode() {
    this.creationMode = true;
  }
  isCreationModeEnabled() {
    return this.creationMode;
  }
  createPlaylist(model: any) {
    return this.http.post(this.baseUrl + 'playlist/' + this.authService.decodedToken.nameid, model);
  }
  getPlaylists() {
    return this.http.get(this.baseUrl + 'playlist/' + this.authService.decodedToken.nameid);
  }
}
