import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Allitems from "./views/Allitems.vue";
import Allcustomer from "./views/Allcustomer.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/allitems",
      name: "allitems",
      component: Allitems
    },
    {
      path: "/allcustomer",
      name: "allcustomer",
      component: Allcustomer
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
