import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { CategoryListComponent } from './category-list/category-list.component';
import { TagListComponent } from './tag-list/tag-list.component';


const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { 
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ProjectListComponent,
        data: { title: extract('Project') }
      },
      {
        path: 'details/:id',
        component: ProjectDetailsComponent
      },
      {
        path: 'category/:id',
        component: CategoryListComponent
      },
      {
        path: 'tags/:id',
        component: TagListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectRoutingModule { }
