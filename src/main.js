import Vue from "vue";
import App from "./App";
import { BootstrapVue, NavbarPlugin, VBScrollspyPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Fooldal from "./components/Fooldal";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(NavbarPlugin);
Vue.use(VBScrollspyPlugin);
Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: "/anita-project",
    component: Fooldal,
  },
  {
    path: "/anita-project/blog",
    component: Blog,
  },
  {
    path: "/anita-project/blog/:id",
    component: BlogDetails,
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
