import Vue from "vue";
import store from "./store/store";
import App from "./App.vue";
import i18n from './i18n';
Vue.config.productionTip = false;

const lang = localStorage.getItem('lang') || 'en';
new Vue({
  store,i18n,
  render: h => h(App)
}).$mount("#app");

