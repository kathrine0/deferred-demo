import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FatCatComponent } from '../../components/fat-cat/fat-cat.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [
    PlaceholderComponent,
    LoadingComponent,
    FatCatComponent,
  ],
  templateUrl: './testing-deferrable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingDeferrableComponent {}
