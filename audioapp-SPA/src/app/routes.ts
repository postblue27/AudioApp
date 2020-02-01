import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginFormComponent } from './loginForm/loginForm.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'library', component: LibraryComponent},
            {path: 'profile', component: ProfileComponent},
        ]
    },
    {path: 'login', component: LoginFormComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];