import { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

import { CmllData } from './pages/Cmll.data';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/Cmll')),
    data: CmllData,
  },
  {
    path: '/*all',
    component: lazy(() => import('./pages/404')),
  },
];
