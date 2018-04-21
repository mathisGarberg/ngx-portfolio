import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';

import { PostListComponent } from './post-list/post-list.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    Angulartics2Module,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    PostListComponent,
    PostPreviewComponent,
    LinksComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
