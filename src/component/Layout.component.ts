import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <ng-content></ng-content>
      <router-outlet />
    </div>
  `,
})
export class LayoutComponent {}
