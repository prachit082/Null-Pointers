import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../component/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'leaderboard',
    loadComponent: () =>
      import('../component/leaderboard/leaderboard.component').then(
        (m) => m.LeaderboardComponent
      ),
  },
  {
    path: 'progress-tracker',
    loadComponent: () =>
      import('../component/progress-tracker/progress-tracker.component').then(
        (m) => m.ProgressTrackerComponent
      ),
  },
  {
    path: 'achievements',
    loadComponent: () =>
      import('../component/achievements/achievements.component').then(
        (m) => m.AchievementsComponent
      ),
  },
];
