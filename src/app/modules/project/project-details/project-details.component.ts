import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '@app/core';

import * as mediumZoom from 'medium-zoom'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.loadProject();
  }

  ngAfterViewInit() {
    mediumZoom(('image'));
  }


  loadProject() {
    this.projectService.getSingleProject(this.route.snapshot.params['id'])
      .subscribe((project: any) => {
        this.project = project;
      });
  }

}
