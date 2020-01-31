import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

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
      ProfileComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      FontAwesomeModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
