import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [BarChartComponent],
  template: `
    <section class="elements">
      <div>
        <app-bar-chart />
      </div>
    </section>
  `,
  styleUrl: './page-with-deferrable.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWithDeferrableComponent {}
