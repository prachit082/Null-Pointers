import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'leaderboard',
    loadComponent: () =>
      import('../component/leaderboard/leaderboard.component').then((m) => m.LeaderboardComponent),
  },
  {
    path: 'progress-tracker',
    loadComponent: () =>
      import('../component/progress-tracker/progress-tracker.component').then(
        (m) => m.ProgressTrackerComponent
      ),
  },
];
