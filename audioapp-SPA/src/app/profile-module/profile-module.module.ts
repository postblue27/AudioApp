import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModuleComponent } from './profile-module.component';
import { ProfileComponent } from './profile/profile.component';

import { ProfileRoutingModule } from './profile-routing.module';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule.forChild(profileRoutes)
  ],
  declarations: [
    ProfileModuleComponent,
    ProfileComponent
  ]
})
export class ProfileModuleModule { }
