import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { JwtModule } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BottomPlayerComponent } from './bottomPlayer/bottomPlayer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LeftBarComponent } from './leftBar/leftBar.component';
import { RightBarComponent } from './rightBar/rightBar.component';
import { BottomMobileNavComponent } from './bottomMobileNav/bottomMobileNav.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';
import { appRoutes } from './routes';
import { TrackService } from './_services/track.service';
import { FileUploaderComponent } from './fileUploader/fileUploader.component';
import { PlaylistCreationComponent } from './playlistCreation/playlistCreation.component';
import { PlaylistService } from './_services/playlist.service';
import { LibraryPlaylistsComponent } from './libraryPlaylists/libraryPlaylists.component';
import { LibraryTracksComponent } from './libraryTracks/libraryTracks.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddTracksToPlaylistComponent } from './addTracksToPlaylist/addTracksToPlaylist.component';
import { ProfileInsideComponent } from './profileInside/profileInside.component';


export function tokenGetter() {
   return localStorage.getItem('token');
}


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      BottomPlayerComponent,
      HomeComponent,
      RegisterComponent,
      LeftBarComponent,
      RightBarComponent,
      BottomMobileNavComponent,
      LoginFormComponent,
      LibraryComponent,
      ProfileComponent,
      FileUploaderComponent,
      PlaylistCreationComponent,
      LibraryPlaylistsComponent,
      LibraryTracksComponent,
      PlaylistComponent,
      AddTracksToPlaylistComponent,
      ProfileInsideComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      TabsModule.forRoot(),
      FileUploadModule,
      FontAwesomeModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config : {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      TrackService,
      PlaylistService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
