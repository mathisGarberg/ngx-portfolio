import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkService } from './link.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        LinkService
    ],
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: DataModule,
            providers: [
                LinkService
            ],
        };
    }
 }