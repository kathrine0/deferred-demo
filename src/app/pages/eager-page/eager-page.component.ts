import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-eager-page',
    imports: [],
    template: `<p>eager-page works!</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EagerPageComponent {}
