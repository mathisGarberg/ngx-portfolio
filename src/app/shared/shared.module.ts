import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { LinksComponent } from './components/links/links.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

import { PairsPipe } from './pipes/pairs.pipe';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

// import {SingleMediaPlayer} from './single-media-player';

// import { ZoomModule } from 'angular-zoom';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
    // ZoomModule
  ],
  declarations: [
    LoaderComponent,
    LinksComponent,
    PairsPipe,
    ScrollToTopComponent
  ],
  exports: [
    LoaderComponent,
    LinksComponent,
    ScrollToTopComponent,
    PairsPipe,
  ]
})
export class SharedModule { }
