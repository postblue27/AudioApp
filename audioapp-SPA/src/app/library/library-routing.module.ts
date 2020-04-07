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


const routes: Routes = [
    // {
    //   path: '',
    //   runGuardsAndResolvers: 'always',
    //   canActivate: [AuthGuard],
    //   children: [
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
                      children: [
                          {path: 'addtracks', component: AddTracksToPlaylistComponent}
                      ]
                  },
                  {path: 'songs', component: LibraryTracksComponent},
                  {path: 'upload', component: FileUploaderComponent}
              ]
          }
  //     ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
