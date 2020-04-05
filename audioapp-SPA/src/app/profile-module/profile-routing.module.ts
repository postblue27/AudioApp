import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryPlaylistsComponent } from '../libraryPlaylists/libraryPlaylists.component';
import { PlaylistComponent } from '../playlist/playlist.component';
import { LibraryTracksComponent } from '../libraryTracks/libraryTracks.component';
import { FileUploaderComponent } from '../fileUploader/fileUploader.component';
import { ProfileModuleComponent } from './profile-module.component';


export const profileRoutes: Routes = [
  {path: 'profile', component: ProfileModuleComponent,
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
