import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import Router from "vue-router";
import "vuetify/dist/vuetify.min.css";

import LogInPage from "./components/LogInPage";
import DashboardPage from "./components/DashboardPage";

Vue.use(Router);
Vue.use(Vuetify);

const routes = [
  {
    path: "/",
    component: LogInPage,
  },
  {
    path: "/dashboard",
    component: DashboardPage,
  },
];

const router = new Router({ mode: "history", routes: routes });
const vuetify = new Vuetify();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
}).$mount("#app");
