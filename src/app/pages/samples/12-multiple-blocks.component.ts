import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { PolarChartComponent } from '../../components/polar-chart/polar-chart.component';

@Component({
    selector: 'app-multiple-blocks',
    imports: [BarChartComponent, LoadingComponent, PolarChartComponent, PlaceholderComponent],
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

      @defer (on interaction) {
        <app-polar-chart />
      } @loading (after 5ms; minimum 2s) {
        <app-loading />
      } @placeholder {
        <app-placeholder [type]="'polarChart'" />
      }
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleBlocksComponent {
  customCondition = false;
}
