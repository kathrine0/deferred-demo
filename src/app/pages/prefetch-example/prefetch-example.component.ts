import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prefetch-example',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>prefetch-example works! - TODO</p>`,
  styleUrl: './prefetch-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrefetchExampleComponent { }
