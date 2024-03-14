import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { QuickAccessComponent } from './components/side-bar/components/quick-access/quick-access.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { BannerPreviewComponent } from './components/banner-preview/banner-preview.component';
import { ButtonMainComponent } from './components/button-main/button-main.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ModalLogInComponent } from './components/modal-log-in/modal-log-in.component';
import { ButtonModalLogInComponent } from './components/button-modal-log-in/button-modal-log-in.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    LogoComponent,
    QuickAccessComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe,
    ImgBrokenDirective,
    BannerPreviewComponent,
    ButtonMainComponent,
    NavComponent,
    FooterComponent,
    ModalLogInComponent,
    ButtonModalLogInComponent

  ],

  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],

  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    LogoComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe,
    ImgBrokenDirective,
    BannerPreviewComponent,
    ButtonMainComponent,
    NavComponent,
    FooterComponent,
    ModalLogInComponent,
    ButtonModalLogInComponent
  ]
})

export class SharedModule { }
