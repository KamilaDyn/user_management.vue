import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFilter from "vue-filter";

Vue.config.productionTip = false;
Vue.use(VueFilter);
Vue.filter("to-uppercase", function(value) {
  return value.toUpperCase();
});

new Vue({
  router,
  mode: history,
  render: h => h(App)
}).$mount("#app");
