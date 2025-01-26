import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
    selector: 'app-prefetch',
    imports: [BarChartComponent, LoadingComponent, PlaceholderComponent],
    template: `
    <section class="elements">
      <button (click)="customCondition = !customCondition">
        Toggle custom condition
      </button>
      @defer (when customCondition; prefetch on idle) {
        <app-bar-chart />
      } @loading (after 5ms; minimum 2s) {
        <app-loading />
      } @placeholder {
        <app-placeholder />
      }
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrefetchComponent {
  customCondition = false;
}
