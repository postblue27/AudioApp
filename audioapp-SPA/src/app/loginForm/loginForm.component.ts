import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from '../_services/alertify.service';

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
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.model).subscribe(next => {
      this.loginModeEmitter.emit(false);
      console.log('logged successfully');
      this.alertify.success('logged successfully');
    }, error => {
     this.loginModeEmitter.emit(true);
     console.log('Failed to login');
     this.alertify.error(error);
    });
  }

  cancelLoginMode() {
    this.loginModeEmitter.emit(false);
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
