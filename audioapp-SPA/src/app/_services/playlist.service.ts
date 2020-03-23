import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private creationMode = false;
  baseUrl = environment.apiUrl;
  userPlaylistsUIupdate: EventEmitter<any> = new EventEmitter();
  private detailedViewMode = false;
  currentPlaylistId: any;
  constructor(private http: HttpClient, private authService: AuthService, private route: ActivatedRoute) { }

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
  getPlaylist(playlistId: string) {
    return this.http.get(this.baseUrl + 'playlist/exact/' + playlistId);
  }

  enableDetailedViewMode(playlistId: string) {
    this.detailedViewMode = true;
  }
  disableDetailedViewMode() {
    this.detailedViewMode = false;
  }
  isDetailedViewModeEnabled() {
    return this.detailedViewMode;
  }

  getTracksOfPlaylist(playlistId: string) {
    return this.http.get(this.baseUrl + 'playlist/' + this.authService.decodedToken.nameid +
      '/tracks/' + playlistId);
  }
}
