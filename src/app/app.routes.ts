import { Routes } from '@angular/router';
import { EagerPageComponent } from './pages/eager-page/eager-page.component';
import { PlainDeferrableComponent } from './pages/samples/01-plain-deferrable.component';
import { LoadingBlockComponent } from './pages/samples/02-loading-block.component';
import { LoadingWithParamsComponent } from './pages/samples/03-loading-with-params.component';
import { OnInteractionComponent } from './pages/samples/04-on-interaction.component';
import { OnHoverComponent } from './pages/samples/05-on-hover.component';
import { OnHoverOtherComponent } from './pages/samples/06-on-hover-other.component';
import { OnViewportComponent } from './pages/samples/07-on-viewport.component';
import { OnTimerComponent } from './pages/samples/08-on-timer.component';
import { WhenCustomComponent } from './pages/samples/09-when-custom.component';
import { MixupComponent } from './pages/samples/10-mixup.component';
import { ErrorBlockComponent } from './pages/samples/11-error-block.component';
import { MultipleBlocksComponent } from './pages/samples/12-multiple-blocks.component';
import { PrefetchComponent } from './pages/samples/13-prefetch.component';
import { SampleHostComponent } from './pages/samples/sample-host.component';

export const routes: Routes = [
  {
    path: '',
    component: EagerPageComponent,
    pathMatch: 'full',
  },
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
    loadComponent: () =>
      import(
        './pages/page-with-deferrable/page-with-deferrable.component'
      ).then((c) => c.PageWithDeferrableComponent),
  },
  {
    path: 'samples',
    loadComponent: () =>
      import('./pages/samples/sample-host.component').then(
        (c) => c.SampleHostComponent,
      ),
    children: [
      {
        path: '1',
        component: PlainDeferrableComponent,
        title: '1 Plain deferrable',
      },
      {
        path: '2',
        component: LoadingBlockComponent,
        title: '2 Loading block',
      },
      {
        path: '3',
        component: LoadingWithParamsComponent,
        title: '3 Loading with params',
      },
      {
        path: '4',
        component: OnInteractionComponent,
        title: '4 On interaction',
      },
      {
        path: '5',
        component: OnHoverComponent,
        title: '5 On hover',
      },
      {
        path: '6',
        component: OnHoverOtherComponent,
        title: '6 On hover other',
      },
      {
        path: '7',
        component: OnViewportComponent,
        title: '7 On viewport',
      },
      {
        path: '8',
        component: OnTimerComponent,
        title: '8 On timer',
      },
      {
        path: '9',
        component: WhenCustomComponent,
        title: '9 When custom',
      },
      {
        path: '10',
        component: MixupComponent,
        title: '10 Mixup',
      },
      {
        path: '11',
        component: ErrorBlockComponent,
        title: '11 Error block',
      },
      {
        path: '12',
        component: MultipleBlocksComponent,
        title: '12 Multiple blocks',
      },
      {
        path: '13',
        component: PrefetchComponent,
        title: '13 Prefetch',
      },
    ],
  },
];
