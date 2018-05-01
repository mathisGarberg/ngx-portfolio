import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { CategoryService } from '@app/core';

import { Project } from '@app/shared';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  projects: Project[];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    console.log('Biip');
    this.loadProjects();
  }

  loadProjects() {
    this.categoryService.getProjects(this.route.snapshot.params['id'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((category: any) => {
        console.log(category);
        this.projects = category.projects;
      });
  }

}
