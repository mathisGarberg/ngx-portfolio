import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { SharedModule } from '@app/shared';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    Angulartics2Module,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    ProjectPreviewComponent
  ],
  providers: []
})
export class ProjectModule { }