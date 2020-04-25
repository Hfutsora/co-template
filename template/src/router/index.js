import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routerRegister = [];

const requireRouter = require.context('./modules', true, /\.js$/);
requireRouter.keys().forEach((key) => {
  routerRegister.push(requireRouter(key).default || requireRouter(key));
});

export const constantRouterMap = [
  ...routerRegister,
  {
    path: '*',
    redirect: '/home',
  },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
