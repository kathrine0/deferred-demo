import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FatCatComponent } from '../../components/fat-cat/fat-cat.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
@Component({
  selector: 'app-page-with-deferrable',
  standalone: true,
  imports: [PlaceholderComponent, LoadingComponent, FatCatComponent],
  template: `
    @defer {
      <app-fat-cat data-test-id="deferred-element"></app-fat-cat>
    } @placeholder {
      <app-placeholder
        data-test-id="placeholder"
        [type]="'image'"
      ></app-placeholder>
    } @loading {
      <app-loading data-test-id="loader"></app-loading>
    } @error {}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingDeferrableComponent {}
