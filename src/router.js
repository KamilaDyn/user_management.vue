import Vue from "vue";
import VueFilter from "vue-filter";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

Vue.use(Router);
Vue.use(VueFilter);

export default new Router({
  mode: "history",
  // base: __dirname,

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: `/users/:id`,
      name: "userdetails",
      component: UserDetails
    },
    {
      path: "/users/edit/:id",
      name: "edit",
      component: EditUser
    },
    {
      path: "/add",
      name: "add",
      component: AddUser
    }
  ]
});
