import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { PlaylistService } from './_services/playlist.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'audioapp-SPA';
  loginMode: boolean = false;

  constructor(public authService: AuthService, public playlistService: PlaylistService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.authService.jwtHelper.decodeToken(token);
    }
  }

  enableLoginMode(loginMode: boolean) {
    this.loginMode = loginMode;
  }
  
}
