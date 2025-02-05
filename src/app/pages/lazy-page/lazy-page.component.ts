import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lazy-page',
  standalone: true,
  imports: [],
  template: `<p>lazy-page works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyPageComponent {}
