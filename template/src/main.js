import Vue from 'vue';
import router from '@/router';
import store from '@/store';

import '@/utils/request-default';
import '@/permission';

import '@/styles/index.scss';

import VuelidateError from '@/plugins/error';

import messages from '@/messages';
import VueI18n from 'vue-i18n';

import App from './App';

Vue.use(VuelidateError);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  messages,
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
