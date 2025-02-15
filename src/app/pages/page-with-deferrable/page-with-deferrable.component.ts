import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { CountDownComponent } from '../../components/count-down/count-down.component';
import { ErrorComponent } from "../../components/error/error.component";
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { PolarChartComponent } from '../../components/polar-chart/polar-chart.component';
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [
    BarChartComponent,
    // PlaceholderComponent,
    // LoadingComponent,
    // CountDownComponent,
    // PolarChartComponent,
    // ErrorComponent
],
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
