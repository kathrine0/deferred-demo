import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sample-host',
    imports: [RouterModule],
    template: `
    @defer (on interaction) {
      <router-outlet></router-outlet>
    } @placeholder {
      <div class="full"></div>
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleHostComponent {}
