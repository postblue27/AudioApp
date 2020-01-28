import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {

  model: any = {};
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
}
