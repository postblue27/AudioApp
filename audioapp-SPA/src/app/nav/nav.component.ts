import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = localStorage.getItem('username');
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSearch = faSearch;
  faSignInAlt = faSignInAlt;

  @Output() loginModeEmitter = new EventEmitter();
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  sendLoginMode() {
    this.loginModeEmitter.emit(true);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
