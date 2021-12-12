import { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

import { CmllData } from './pages/Cmll.data';

export const routes: RouteDefinition[] = [
  {
    path: '/cmll',
    component: lazy(() => import('./pages/Cmll')),
    data: CmllData,
  },
];
