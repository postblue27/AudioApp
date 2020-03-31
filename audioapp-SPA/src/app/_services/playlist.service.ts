import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PlaylistTrack } from '../_models/playlistTrack';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private creationMode = false;
  baseUrl = environment.apiUrl;
  userPlaylistsUIupdate: EventEmitter<any> = new EventEmitter();
  tracksAddedToPlaylistUpdate: EventEmitter<any> = new EventEmitter();
  private detailedViewMode = false;
  currentPlaylist: any;
  private addTracksMode = false;
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

  isAddTracksModeEnabled() {
    return this.addTracksMode;
  }
  enableAddTracksMode() {
    this.addTracksMode = true;
  }
  disableAddTracksMode() {
    this.addTracksMode = false;
    this.tracksAddedToPlaylistUpdate.emit();
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

  enableDetailedViewMode(playlist: any) {
    this.currentPlaylist = playlist;
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

  addTrackToPlaylist(track_id: number, playlist_id: number) {
    const playlistTrack: PlaylistTrack = {
      trackId: track_id,
      playlistId: playlist_id
    };
    return this.http.post(this.baseUrl + 'playlist/' + this.authService.decodedToken.nameid + 
      '/addtrack', playlistTrack);
  }
}
