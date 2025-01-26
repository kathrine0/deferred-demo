import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
    selector: 'app-loading-with-params',
    imports: [BarChartComponent, LoadingComponent],
    template: `
    <section class="elements">
      @defer {
        <app-bar-chart />
      } @loading (after 1ms; minimum 2s) {
        <app-loading />
      }
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingWithParamsComponent {}
