import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import router from './router';
import store from './store'
import VueMeta from 'vue-meta';
import VueSilentbox from 'vue-silentbox';
import BackToTop from 'vue-backtotop';
import i18n from './i18n';
import * as translate from './i18n/translate';
import initTranslate from './i18n/serviceTranslate';

Vue.use(VueSilentbox);
Vue.use(BootstrapVue);
Vue.use(BackToTop);
Vue.use(VueAwesomeSwiper);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/material-design-iconic-font.min.css';
import '../src/assets/css/ionicons.min.css';
import '../src/assets/css/flaticon.min.css';
import 'swiper/css/swiper.min.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/scss/style.scss';

window.$crisp = [];
window.CRISP_WEBSITE_ID = '818b4e69-c38b-4aae-b7a5-b688b25f0218';

// eslint-disable-next-line wrap-iife
(function crisp() {
  const d = document;
  const s = d.createElement('script');
  s.src = 'https://client.crisp.chat/l.js';
  s.async = 1;
  d.getElementsByTagName('head')[0].appendChild(s);
})();

Vue.config.productionTip = false;
const messages = translate.TRANSLATE;
if (process.env.NODE_ENV === 'development') {
  initTranslate(messages.fr);
  initTranslate(messages.en);
}

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
