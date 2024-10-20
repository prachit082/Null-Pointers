import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../component/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'progress-tracker',
    loadComponent: () =>
      import('../component/progress-tracker/progress-tracker.component').then(
        (m) => m.ProgressTrackerComponent
      ),
  },
];
