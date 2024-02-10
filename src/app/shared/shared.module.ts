import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { QuickAccessComponent } from './components/side-bar/components/quick-access/quick-access.component';


@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    LogoComponent,
    QuickAccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    LogoComponent
  ]
})
export class SharedModule { }
