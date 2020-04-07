import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { JwtModule } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { NavComponent } from './navigation-components/nav/nav.component';
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
import { appRoutes } from './routes';
import { TrackService } from './_services/track.service';
import { FileUploaderComponent } from './library/fileUploader/fileUploader.component';
import { PlaylistCreationComponent } from './library/playlistCreation/playlistCreation.component';
import { PlaylistService } from './_services/playlist.service';
import { LibraryPlaylistsComponent } from './library/libraryPlaylists/libraryPlaylists.component';
import { LibraryTracksComponent } from './library/libraryTracks/libraryTracks.component';
import { PlaylistComponent } from './library/playlist/playlist.component';
import { AddTracksToPlaylistComponent } from './library/addTracksToPlaylist/addTracksToPlaylist.component';
import { ProfileInsideComponent } from './profileInside/profileInside.component';
import { ProfileModuleModule } from './profile-module/profile-module.module';
import { LibraryModule } from './library/library.module';


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
      // LibraryComponent,
      // FileUploaderComponent,
      // PlaylistCreationComponent,
      // LibraryPlaylistsComponent,
      // LibraryTracksComponent,
      // PlaylistComponent,
      // AddTracksToPlaylistComponent,
      ProfileInsideComponent
   ],
   imports: [
      ProfileModuleModule,
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
      }),
      LibraryModule
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
