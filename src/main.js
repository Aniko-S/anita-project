import Vue from "vue";
import App from "./App";
import { BootstrapVue, NavbarPlugin, VBScrollspyPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import Fooldal from "./components/Fooldal";
import Blog from "./components/Blog";
import BlogDetails3 from "./components/BlogDetails3";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(NavbarPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Fooldal,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    component: BlogDetails3,
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
