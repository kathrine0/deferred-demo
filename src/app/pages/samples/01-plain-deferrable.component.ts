import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';

@Component({
  selector: 'app-plain-deferrable',
  standalone: true,
  imports: [BarChartComponent],
  template: `
    <section class="elements">
      @defer {
        <app-bar-chart />
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlainDeferrableComponent {}
