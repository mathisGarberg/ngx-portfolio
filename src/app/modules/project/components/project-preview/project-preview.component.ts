import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '@app/shared';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit {

  @Input() project: Project;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // console.log(this.project);
    
  }

}
