import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkService } from './link.service';
import { SocialLinksService } from './social-links.service';
import { SkillService } from './skill.service';
import { CategoryService } from './category.service';

// mocks

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        LinkService,
        SocialLinksService,
        SkillService,
        CategoryService
    ],
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: DataModule,
            providers: [
                LinkService,
                SocialLinksService,
                SkillService,
                CategoryService
            ],
        };
    }
 }