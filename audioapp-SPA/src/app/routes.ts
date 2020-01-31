import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];