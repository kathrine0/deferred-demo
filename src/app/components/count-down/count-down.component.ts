import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, take } from 'rxjs';

@Component({
    selector: 'app-count-down',
    imports: [],
    template: `<h1>{{ currentCount() }}</h1>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountDownComponent {
  count = input<number>();
  currentCount = signal(0);

  constructor() {
    toObservable(this.count)
      .pipe(filter(Boolean), take(1))
      .subscribe((count) => this.startCountdown(count));
  }

  private startCountdown(count: number) {
    this.currentCount.set(count);

    let timer = setInterval(() => {
      if (this.currentCount() > 0) {
        this.currentCount.update((val) => val - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
}
