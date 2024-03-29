import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { PlaylistService } from '../_services/playlist.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
  faTimes = faTimes;

  model: any = {};
  registerMode: boolean = false;
  constructor(private authService: AuthService, private alertify: AlertifyService, 
    private router: Router, public playlistService: PlaylistService, private location: Location) { }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('logged successfully');
      this.playlistService.userPlaylistsUIupdate.emit();
      this.alertify.success('logged successfully');
    }, error => {
     console.log('Failed to login');
     this.alertify.error(error);
    }, () => {
      this.router.navigate(['']);
    });
  }

  back() {
    this.location.back();
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration success');
      this.alertify.success('registration success');
      this.cancelRegistrationMode();
    }, error => {
      console.log(error);
      this.alertify.error(error);
    });
  }

  enableRegisterMode() {
    this.registerMode = true;
    console.log('enabled');
  }

  cancelRegistrationMode() {
    this.registerMode = false;
    console.log('cancelled');
  }
}
