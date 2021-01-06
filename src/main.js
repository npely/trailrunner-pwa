import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
