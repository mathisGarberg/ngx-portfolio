import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { SectionService } from '@app/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  sections: any;

  constructor(
    private sectionService: SectionService,
  ) { }

  ngOnInit() {
    this.loadLinks();
  }

  loadLinks() {
    this.sectionService.getLinks()
      .subscribe((sections) => {
        this.sections = sections;
      });
  }

}
