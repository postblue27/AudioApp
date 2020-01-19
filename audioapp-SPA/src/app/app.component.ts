import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audioapp-SPA';
  activeTrack: any;

  passActiveTrack(track: any) {
    this.activeTrack = track;
  }
}
