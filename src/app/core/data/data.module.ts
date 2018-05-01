import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionService } from './section.service';
import { SocialLinksService } from './social-links.service';
import { SkillService } from './skill.service';

// mocks

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        SectionService,
        SocialLinksService,
        SkillService,
    ],
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: DataModule,
            providers: [
                SectionService,
                SocialLinksService,
                SkillService,
            ],
        };
    }
 }