import { Routes } from '@angular/router';
import { EagerPageComponent } from './pages/eager-page/eager-page.component';

export const routes: Routes = [
  {
    path: 'eager-page',
    component: EagerPageComponent,
  },
  {
    path: 'lazy-page',
    loadComponent: () => import('./pages/lazy-page/lazy-page.component'),
  },
  {
    path: 'page-with-deferrable',
    loadComponent: () =>
      import('./pages/page-with-deferrable/page-with-deferrable.component'),
  },
];
