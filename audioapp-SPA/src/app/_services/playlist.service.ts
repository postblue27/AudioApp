import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private http: HttpClient, private authService: AuthService, private route: ActivatedRoute,
    private router: Router) { 

    }

  isAddTracksModeEnabled() {
    return this.addTracksMode;
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

  setCurrentPlaylist(playlist: any) {
    this.currentPlaylist = playlist;
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
