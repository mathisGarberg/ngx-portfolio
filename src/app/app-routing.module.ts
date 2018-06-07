import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';

const routes: Routes = [
  Route.withShell([
    { path: 'project', loadChildren: 'app/modules/project/project.module#ProjectModule' },
  ]),
  // Fallback when no prior route is matched
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
