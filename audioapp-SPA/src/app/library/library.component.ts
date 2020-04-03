import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PlaylistService } from '../_services/playlist.service';
import { TrackService } from '../_services/track.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor(private router: Router, public playlistService: PlaylistService, private trackService: TrackService) { 
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
    });
  }

  ngOnInit() {
  }
}
