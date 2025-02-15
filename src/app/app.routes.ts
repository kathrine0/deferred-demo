import { Routes } from '@angular/router';
import { EagerPageComponent } from './pages/eager-page/eager-page.component';
import { PageWithDeferrableComponent } from './pages/page-with-deferrable/page-with-deferrable.component';

export const routes: Routes = [
  {
    path: 'eager-page',
    component: EagerPageComponent,
  },
  {
    path: 'lazy-page',
    loadComponent: () =>
      import('./pages/lazy-page/lazy-page.component').then(
        (c) => c.LazyPageComponent,
      ),
  },
  {
    path: 'page-with-deferrable',
    component: PageWithDeferrableComponent,
  },
];
