import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, Navigation } from '@angular/router';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap';
import { filter } from 'rxjs/operators';
import { PlaylistService } from '../_services/playlist.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @ViewChild('tabset', {static: true}) tabset: TabsetComponent;
  constructor(private router: Router, public playlistService: PlaylistService) { 
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if (this.router.url === '/library/playlists') {
        this.tabset.tabs[0].active = true;
        playlistService.disableDetailedViewMode();
      }
      if (this.router.url === '/library/songs') {
        this.tabset.tabs[1].active = true;
      }
      if (this.router.url === '/library/upload') {
        this.tabset.tabs[2].active = true;
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  onSelect(tab: string) {
    if (tab === 'playlists') {
      this.router.navigate(['library/playlists']);
    }
    if (tab === 'songs') {
      this.router.navigate(['library/songs']);
    }
    if (tab === 'upload') {
      this.router.navigate(['library/upload']);
    }
  }
}
