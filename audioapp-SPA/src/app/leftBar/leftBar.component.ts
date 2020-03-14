import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from '../_services/playlist.service';

@Component({
  selector: 'app-leftBar',
  templateUrl: './leftBar.component.html',
  styleUrls: ['./leftBar.component.css']
})
export class LeftBarComponent implements OnInit {
  faHome = faHome;
  faEnvelope = faEnvelope;
  faCompactDisc = faCompactDisc;
  faUser = faUser;
  faPlus = faPlus;
  constructor(public playlistService: PlaylistService) { }

  ngOnInit() {
  }

}
