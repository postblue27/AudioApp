import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';
import { TrackService } from '../../_services/track.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = localStorage.getItem('username');
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSignInAlt = faSignInAlt;
  
  constructor(public trackService: TrackService, public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  sendLoginMode() {
    this.authService.enableLoginMode();
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}