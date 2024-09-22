import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pages = [
    { name: 'Eager Page', link: '/eager-page' },
    { name: 'Lazy Page', link: '/lazy-page' },
    { name: 'Page With Deferrable', link: '/page-with-deferrable' },
  ];
}
