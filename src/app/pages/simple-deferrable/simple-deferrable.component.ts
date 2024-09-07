import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { LoadingComponent } from "../../components/loading/loading.component";
import { FatCatComponent } from "../../components/fat-cat/fat-cat.component";
@Component({
  selector: 'app-simple-deferrable',
  standalone: true,
  imports: [
    FatCatComponent
],
  templateUrl: './simple-deferrable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDeferrableComponent { }
