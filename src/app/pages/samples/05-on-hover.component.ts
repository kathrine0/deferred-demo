import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';

@Component({
  selector: 'app-on-hover',
  standalone: true,
  imports: [BarChartComponent, LoadingComponent, PlaceholderComponent],
  template: `
    <section class="elements">
      @defer (on hover) {
        <app-bar-chart />
      } @loading (after 5ms; minimum 2s) {
        <app-loading />
      } @placeholder {
        <app-placeholder> Hover me to load </app-placeholder>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnHoverComponent {}
