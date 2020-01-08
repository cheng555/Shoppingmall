import "babel-polyfill";
import Vue from "vue";
import App from "./App";
import router from "./router/client";
import store from "./store";
import i18n from "./locales/client";


import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/common.less";
import "@/assets/styles/index.scss"; // global css

Vue.config.productionTip = false;

import ElementUI from "element-ui";
Vue.use(ElementUI, { size: "mini", zIndex: 3000 });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App },
  i18n
});
