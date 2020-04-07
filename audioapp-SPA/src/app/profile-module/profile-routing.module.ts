import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryPlaylistsComponent } from '../library/libraryPlaylists/libraryPlaylists.component';
import { PlaylistComponent } from '../library/playlist/playlist.component';
import { LibraryTracksComponent } from '../library/libraryTracks/libraryTracks.component';
import { FileUploaderComponent } from '../library/fileUploader/fileUploader.component';
import { ProfileModuleComponent } from './profile-module.component';
import { AuthGuard } from '../_guards/auth.guard';


export const profileRoutes: Routes = [
  {path: 'profile', component: ProfileModuleComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
      {path: 'playlists', component: LibraryPlaylistsComponent},
      {path: 'playlists/:playlistId', component: PlaylistComponent},
      {path: 'songs', component: LibraryTracksComponent},
      {path: 'upload', component: FileUploaderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
