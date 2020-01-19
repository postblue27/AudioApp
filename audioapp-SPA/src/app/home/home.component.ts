import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  tracks: any;
  @Output() activeTrackSrc = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTracks();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getTracks() {
    this.http.get('http://localhost:5000/api/audio').subscribe(response => {
      this.tracks = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  passActiveTrackSrc(src: string) {
    this.activeTrackSrc.emit(src);
  }
}
