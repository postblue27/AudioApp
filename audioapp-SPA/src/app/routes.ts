import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { SearchComponent } from './search/search.component';
import { SearchResolver } from './_resolvers/search.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'search/:inputString', component: SearchComponent,
        resolve: {data: SearchResolver}
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];