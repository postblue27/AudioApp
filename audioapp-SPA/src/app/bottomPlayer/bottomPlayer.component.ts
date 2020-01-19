import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottomPlayer',
  templateUrl: './bottomPlayer.component.html',
  styleUrls: ['./bottomPlayer.component.css']
})
export class BottomPlayerComponent implements OnInit {
  faCoffee = faCoffee;
  @Input() activeTrackSrcFromApp: string;
  constructor() { }

  ngOnInit() {
  }

}
