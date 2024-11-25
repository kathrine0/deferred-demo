import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { CountDownComponent } from '../../components/count-down/count-down.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-on-timer',
  standalone: true,
  imports: [BarChartComponent, LoadingComponent, CountDownComponent],
  template: `
    <section class="elements">
      @defer (on timer(5s)) {
        <app-bar-chart />
      } @loading (after 5ms; minimum 2s) {
        <app-loading />
      } @placeholder {
        <app-count-down [count]="5" />
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnTimerComponent {}

