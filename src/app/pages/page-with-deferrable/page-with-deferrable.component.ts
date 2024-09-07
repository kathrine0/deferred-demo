import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FatCatComponent } from '../../components/fat-cat/fat-cat.component';
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [FatCatComponent],
  templateUrl: './page-with-deferrable.component.html',
  styleUrl: './page-with-deferrable.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWithDeferrableComponent {}
