import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { ErrorComponent } from '../../components/error/error.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
    selector: 'app-error-block',
    imports: [BarChartComponent, LoadingComponent, ErrorComponent, PlaceholderComponent],
    template: `
    <section class="elements">
      <button (click)="customCondition = !customCondition">
        Toggle custom condition
      </button>
      @defer (when customCondition) {
        <app-bar-chart />
      } @loading (after 5ms; minimum 2s) {
        <app-loading />
      } @placeholder {
        <app-placeholder />
      } @error {
        <app-error />
      }
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorBlockComponent {
  customCondition = false;
}


