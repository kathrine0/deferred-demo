import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FatCatComponent } from '../../components/fat-cat/fat-cat.component';
@Component({
  selector: 'app-simple-deferrable',
  standalone: true,
  imports: [FatCatComponent],
  template: `
    <section class="elements">
      <div>
        @defer {
          <app-fat-cat />
        } @placeholder {
          <div>placeholder</div>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDeferrableComponent {}
