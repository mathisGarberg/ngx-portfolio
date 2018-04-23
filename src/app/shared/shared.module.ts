import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { LinksComponent } from './components/links/links.component';

import { PairsPipe } from './pipes/pairs.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoaderComponent,
    LinksComponent,
    PairsPipe
  ],
  exports: [
    LoaderComponent,
    LinksComponent,
    PairsPipe
  ]
})
export class SharedModule { }
