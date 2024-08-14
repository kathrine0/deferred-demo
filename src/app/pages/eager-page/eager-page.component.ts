import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-eager-page',
  standalone: true,
  imports: [],
  template: `<p>eager-page works!</p>`,
  styleUrl: './eager-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EagerPageComponent { }
