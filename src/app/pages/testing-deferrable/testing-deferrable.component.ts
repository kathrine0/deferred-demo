import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { LoadingComponent } from "../../components/loading/loading.component";
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [
    BarChartComponent,
    PlaceholderComponent,
    LoadingComponent
],
  templateUrl: './testing-deferrable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingDeferrableComponent {
  customCondition = false;
}
