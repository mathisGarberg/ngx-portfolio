/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@env/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrapPromise =  platformBrowserDynamic().bootstrapModule(AppModule);

// Logging bootstrap information
bootstrapPromise.then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
