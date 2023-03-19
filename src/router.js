import Home from "./pages/Home-page.vue";
import Counter from "./pages/Counter-page.vue";
import Error from "./pages/Error-page.vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/counter",
      component: Counter,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: Error,
    // },
    {path: '/404', name: 'page-not-found', component: Error},
    {path: '/:catchAll(.*)', redirect: '/404'}
  ], // short for `routes: routes`
});
