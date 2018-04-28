import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ProjectService, SectionService } from '@app/core';
import { Project } from '@app/shared';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  isLoading: boolean;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((projects: any) => {
        this.projects = projects;
      });
  }

}
