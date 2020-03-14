import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  creationMode = false;
  baseUrl = environment.apiUrl;
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
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization : 'Bearer ' + localStorage.getItem('token')
      })
    };
    console.log(model);
    return this.http.post(this.baseUrl + 'playlist/' + this.authService.decodedToken.nameid, model, httpOptions);
  }
}
