import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-eager-page',
  standalone: true,
  imports: [],
  templateUrl: './eager-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EagerPageComponent {}
