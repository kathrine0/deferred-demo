import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
  selector: 'app-when-custom',
  standalone: true,
  imports: [BarChartComponent, LoadingComponent, PlaceholderComponent],
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
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhenCustomComponent {
  customCondition = false;
}
