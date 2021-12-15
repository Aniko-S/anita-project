import Vue from "vue";
import App from "./App";
import { BootstrapVue, NavbarPlugin, VBScrollspyPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Fooldal from "./components/Fooldal";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Adatkezelesi from "./components/Adatkezelesi";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(NavbarPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(VueRouter);
Vue.use(VueMeta);

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
    component: BlogDetails,
  },
  {
    path: "/adatkezelesi_tajekoztato",
    component: Adatkezelesi,
  },
];

const router = new VueRouter({
  routes: routes,
  base: process.env.BASE_URL,
  mode: "history",
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 60 },
      };
    }
  },
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
