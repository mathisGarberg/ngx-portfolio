import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

import { PostListComponent } from './post-list/post-list.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    Angulartics2Module,
    PostRoutingModule
  ],
  declarations: [
    PostComponent,
    PostListComponent,
    PostPreviewComponent,
  ],
  providers: []
})
export class PostModule { }
