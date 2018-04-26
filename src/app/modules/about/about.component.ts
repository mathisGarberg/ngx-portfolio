import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { SocialLinksService, SkillService } from '@app/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;
  socialLinks: any;
  skills: any;

  constructor(
    private socialLinksService: SocialLinksService,
    private skillService: SkillService
  ) { }

  ngOnInit() {
    this.loadSocialLinks();
    this.loadSkills();
  }

  loadSocialLinks() {
    this.socialLinksService.getAll()
      .subscribe((socialLinks) => {
        this.socialLinks = socialLinks;
      });
  }

  loadSkills() {
    this.skillService.getAll()
      .subscribe((skills) => {
        this.skills = skills;
      });
  }

}
