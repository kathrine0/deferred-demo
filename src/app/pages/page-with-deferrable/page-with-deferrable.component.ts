import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PolarChartComponent } from '../../components/polar-chart/polar-chart.component';
import { CountDownComponent } from '../../components/count-down/count-down.component';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { LongLoadingComponent } from '../../components/long-loading/long-loading.component';
import { RandomFoxComponent } from '../../components/random-fox/random-fox.component';
import { FatCatComponent } from '../../components/fat-cat/fat-cat.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [
    FormsModule,
    CountDownComponent,
    PolarChartComponent,
    BarChartComponent,
    LongLoadingComponent,
    RandomFoxComponent,
    FatCatComponent,
    PlaceholderComponent,
    LoadingComponent,
  ],
  templateUrl: './page-with-deferrable.component.html',
  styleUrl: './page-with-deferrable.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageWithDeferrableComponent {
  customCondition = false;
}
