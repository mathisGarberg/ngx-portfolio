import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { TagService } from '@app/core';

import { Project } from '@app/shared';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  projects: Project[];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private tagService: TagService
  ) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.tagService.getProjects(this.route.snapshot.params['id'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((tag: any) => {
        console.log(tag);
        this.projects = tag.projects;
      });
  }

}
