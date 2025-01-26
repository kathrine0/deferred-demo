import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [BarChartComponent, LoadingComponent, PlaceholderComponent],
  template: `
    <section class="elements">
      @defer (on interaction) {
        <app-bar-chart />
      } @placeholder {
        <app-placeholder />
      } @loading {
        <app-loading />
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWithDeferrableComponent {}
