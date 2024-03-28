import { createRouter, createWebHistory } from 'vue-router';
import PublishRoutes from './_publish_routes.js';

let routesList = [
  // {
  //   path: '/',
  //   name: '/',
  //   component: () => import('@/app.vue'),
  //   meta: { layout: 'DefaultLayout' },
  // },
];
routesList.push(...PublishRoutes);

//
let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesList,
});

export default router;
