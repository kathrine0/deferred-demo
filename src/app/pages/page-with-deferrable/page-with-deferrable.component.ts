import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ErrorComponent } from "../../components/error/error.component";
@Component({
  selector: 'app-page-with-deferrable',
  imports: [BarChartComponent, PlaceholderComponent, LoadingComponent, ErrorComponent],
  template: `
    <section class="elements">
      @defer (hydrate on interaction) {
        <app-bar-chart />
      } @placeholder {
        <app-placeholder />
      } @loading {
        <app-loading />
      } @error {
        <app-error />
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWithDeferrableComponent {}
