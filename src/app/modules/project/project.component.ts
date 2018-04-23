import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { LinkService } from '@app/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  links: any;

  constructor(
    private linkService: LinkService,
  ) { }

  ngOnInit() {
    this.loadLinks();
  }

  loadLinks() {
    this.linkService.getLinks()
      .subscribe((links) => {
        this.links = links;
      });
  }

}
