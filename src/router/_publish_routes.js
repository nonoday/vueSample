const routes = [
  // ui-guide
  {
    path: '/',
    name: '/',
    component: () => import('@/views/sample/Test1.vue'),
    meta: { layout: 'NoneLayout' },
  },
  // company
  {
    path: '/company/Company_test1',
    name: '/company/Company_test1',
    component: () => import('@/views/company/Company_test1.vue'),
    meta: { layout: 'DefaultLayout' },
  },

];

export default routes;
