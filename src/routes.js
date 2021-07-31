import NotFound from './pages/NotFoundPage.vue';
import Main from './components/ProductList.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/cogs',
    name: 'editProduct',
    component: () => import('./pages/formPage.vue'),
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },
];

export default routes;
