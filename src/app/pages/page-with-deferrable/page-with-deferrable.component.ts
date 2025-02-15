import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [BarChartComponent],
  template: `
    <button (click)="shouldLoad = true">Load Chart</button>
    <section class="elements">
      <app-bar-chart />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWithDeferrableComponent {
  shouldLoad = false;
}
