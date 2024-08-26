import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'lazy',
  loadChildren: () => import('./lazy/lazy.module').then((module) => module.LazyModule),
}, {
  path: '',
  redirectTo: '/lazy',
  pathMatch: 'full'
}];
