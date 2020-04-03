import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { LibraryPlaylistsComponent } from './libraryPlaylists/libraryPlaylists.component';
import { LibraryTracksComponent } from './libraryTracks/libraryTracks.component';
import { FileUploaderComponent } from './fileUploader/fileUploader.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ProfileInsideComponent } from './profileInside/profileInside.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'library', component: LibraryComponent,
                children:[
                    {path: 'playlists', component: LibraryPlaylistsComponent},
                    {path: 'playlists/:playlistId', component: PlaylistComponent},
                    {path: 'songs', component: LibraryTracksComponent},
                    {path: 'upload', component: FileUploaderComponent}
                ]
            },
            {path: 'profile', component: ProfileComponent,
                children:[
                    //{path: '', component: ProfileInsideComponent},
                    {path: 'playlists', component: LibraryPlaylistsComponent},
                    {path: 'playlists/:playlistId', component: PlaylistComponent},
                    {path: 'songs', component: LibraryTracksComponent},
                    {path: 'upload', component: FileUploaderComponent}
                ]
            },
        ]
    },
    {path: 'login', component: LoginFormComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];