import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
  faTimes = faTimes;

  model: any = {};
  registerMode: boolean = false;
  @Output() loginModeEmitter = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.model).subscribe(next => {
      this.loginModeEmitter.emit(false);
      console.log('logged successfully');
    }, error => {
      this.loginModeEmitter.emit(true);
      console.log('Failed to login');
    });
  }

  cancelLoginMode() {
    this.loginModeEmitter.emit(false);
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration success');
      this.cancelRegistrationMode();
    }, error => {
      console.log(error);
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
