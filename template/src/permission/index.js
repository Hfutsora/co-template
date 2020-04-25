import router from '@/router';

// progress bar
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import whiteList from './common';

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();

  if (whiteList.includes(to.path)) {
    next();
  } else {
    next(`/login?redirect=${to.path}`);
  }
});

router.afterEach(() => {
  NProgress.done();
});
