import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';
import { LibraryComponent } from './library.component';
import { LibraryPlaylistsComponent } from './libraryPlaylists/libraryPlaylists.component';
import { PlaylistCreationComponent } from './playlistCreation/playlistCreation.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddTracksToPlaylistComponent } from './addTracksToPlaylist/addTracksToPlaylist.component';
import { LibraryTracksComponent } from './libraryTracks/libraryTracks.component';
import { FileUploaderComponent } from './fileUploader/fileUploader.component';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { PlaylistService } from 'src/app/_services/playlist.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PlaylistResolver implements Resolve<any> {
    constructor(private playlistService: PlaylistService, private alertify: AlertifyService, 
        private router: Router) {}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.playlistService.getPlaylist(route.paramMap.get('playlistId')).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving playlist');
                this.router.navigate(['library/playlists']);
                console.log('error');
                return of(null);
            })
        );
    }
}


const routes: Routes = [
    {path: 'library', component: LibraryComponent,
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'playlists', component: LibraryPlaylistsComponent,
                children: [
                    {path: 'create', component: PlaylistCreationComponent}
                ]
            },
            {path: 'playlists/:playlistId', component: PlaylistComponent,
                resolve: {playlist: PlaylistResolver},
                children: [
                    {path: 'addtracks', component: AddTracksToPlaylistComponent}
                ]
            },
            {path: 'songs', component: LibraryTracksComponent},
            {path: 'upload', component: FileUploaderComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }

