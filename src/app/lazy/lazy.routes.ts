import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';

const routes: Routes = [{
  path: '',
  component: LazyComponent
}];

export const lazyModuleRouting = RouterModule.forChild(routes);
