import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audioapp-SPA';
  activeTrackSrc: string;

  passActiveTrackSrc(src: string) {
    this.activeTrackSrc = src;
    console.log("passed to appComponent");
  }
}
