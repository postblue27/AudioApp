import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { SearchComponent } from './search/search.component';
import { SearchResolver } from './_resolvers/search.resolver';
import { TrackResolver } from './_resolvers/track.resolver';
import { AddExactTrackToPlaylistComponent } from './add-exact-track-to-playlist/add-exact-track-to-playlist.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'search/:inputString', component: SearchComponent,
        resolve: {data: SearchResolver}
    },
    {path: 'track/:trackId',
        resolve: {track: TrackResolver},
        children: [
            {path: 'addToPlaylist', component: AddExactTrackToPlaylistComponent,
                runGuardsAndResolvers: 'always',
                canActivate: [AuthGuard],
            }
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];