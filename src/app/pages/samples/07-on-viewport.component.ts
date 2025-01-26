import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
    selector: 'app-on-viewport',
    imports: [BarChartComponent, LoadingComponent, PlaceholderComponent],
    template: `
    <section class="elements">
      <div class="push">
        @defer (on viewport) {
          <app-bar-chart />
        } @loading (after 5ms; minimum 2s) {
          <app-loading />
        } @placeholder {
          <app-placeholder> </app-placeholder>
        }
      </div>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnViewportComponent {}
