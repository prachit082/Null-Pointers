import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'leaderboard',
    loadComponent: () =>
      import('../component/leaderboard/leaderboard.component').then((m) => m.LeaderboardComponent),
  },
];
