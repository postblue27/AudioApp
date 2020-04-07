import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { AddTracksToPlaylistComponent } from './addTracksToPlaylist/addTracksToPlaylist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LibraryTracksComponent } from './libraryTracks/libraryTracks.component';
import { LibraryPlaylistsComponent } from './libraryPlaylists/libraryPlaylists.component';
import { PlaylistCreationComponent } from './playlistCreation/playlistCreation.component';
import { FileUploaderComponent } from './fileUploader/fileUploader.component';
import { LibraryComponent } from './library.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistService } from '../_services/playlist.service';
import { TrackService } from '../_services/track.service';
import { ErrorInterceptorProvider } from '../_services/error.interceptor';
import { AuthService } from '../_services/auth.service';


@NgModule({
  declarations: [
    LibraryComponent,
    FileUploaderComponent,
    PlaylistCreationComponent,
    LibraryPlaylistsComponent,
    LibraryTracksComponent,
    PlaylistComponent,
    AddTracksToPlaylistComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    FontAwesomeModule
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    TrackService,
    PlaylistService
 ]
})
export class LibraryModule { }
