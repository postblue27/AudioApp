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
import { LeftBarComponent } from './navigation-components/leftBar/leftBar.component';
import { RightBarComponent } from './navigation-components/rightBar/rightBar.component';
import { BottomMobileNavComponent } from './navigation-components/bottomMobileNav/bottomMobileNav.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';
import { appRoutes } from './routes';
import { TrackService } from './_services/track.service';
import { PlaylistService } from './_services/playlist.service';
import { ProfileModuleModule } from './profile-module/profile-module.module';
import { LibraryModule } from './library/library.module';
import { SearchComponent } from './search/search.component';
import { SearchResolver } from './_resolvers/search.resolver';


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
      SearchComponent
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
      PlaylistService,
      SearchResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
