import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { SectionComponent } from './components/section/section.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PairsPipe } from './pipes/pairs.pipe';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { FooterComponent } from './components/footer/footer.component';

// import {SingleMediaPlayer} from './single-media-player';

// import { ZoomModule } from 'angular-zoom';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgbModule.forRoot(),
    // ZoomModule
  ],
  declarations: [
    LoaderComponent,
    SectionComponent,
    PairsPipe,
    ScrollToTopComponent,
    FooterComponent
  ],
  exports: [
    LoaderComponent,
    SectionComponent,
    ScrollToTopComponent,
    FooterComponent,
    PairsPipe,
    NgbModule
  ]
})
export class SharedModule { }
