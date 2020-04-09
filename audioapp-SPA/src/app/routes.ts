import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './loginForm/loginForm.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginFormComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];