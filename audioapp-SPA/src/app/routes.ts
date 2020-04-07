import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile-module/profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { LibraryPlaylistsComponent } from './library/libraryPlaylists/libraryPlaylists.component';
import { LibraryTracksComponent } from './library/libraryTracks/libraryTracks.component';
import { FileUploaderComponent } from './library/fileUploader/fileUploader.component';
import { PlaylistComponent } from './library/playlist/playlist.component';
import { AddTracksToPlaylistComponent } from './library/addTracksToPlaylist/addTracksToPlaylist.component';
import { PlaylistCreationComponent } from './library/playlistCreation/playlistCreation.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    // {
    //     path: '',
    //     runGuardsAndResolvers: 'always',
    //     canActivate: [AuthGuard],
    //     children: [
    //         {path: 'library', component: LibraryComponent,
    //             children: [
    //                 {path: 'playlists', component: LibraryPlaylistsComponent,
    //                     children: [
    //                         {path: 'create', component: PlaylistCreationComponent}
    //                     ]
    //                 },
    //                 {path: 'playlists/:playlistId', component: PlaylistComponent,
    //                     children: [
    //                         {path: 'addtracks', component: AddTracksToPlaylistComponent}
    //                     ]
    //                 },
    //                 {path: 'songs', component: LibraryTracksComponent},
    //                 {path: 'upload', component: FileUploaderComponent}
    //             ]
    //         }
    //     ]
    // },
    {path: 'login', component: LoginFormComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];