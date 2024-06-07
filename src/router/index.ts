import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-view/HomeView.vue";
import CatalogView from "../views/catalog-views/СatalogView.vue";
import OrdersViews from "../views/orders-views/OrdersViews.vue";
import FavoritesViews from "../views/favorites-views/FavoritesViews.vue";
import BasketViews from "../views/basket-views/BasketViews.vue";
import AboutViews from "../views/about-views/AboutViews.vue";
import ProfileView from "../views/profile-view/ProfileView.vue"
import ErrorViews from "../views/error-views/ErrorViews.vue"
import OneProductViews from "../views/oneProduct-views/OneProductViews.vue"
import OneCategoryViews from "../views/oneCategory-views/OneCategoryViews.vue"
import Auth from "./middleware/Auth"
import middlewarePipeline from "./middlewarePipeline";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalog",
      component: CatalogView,
    },
    {
      path: "/orders",
      component: OrdersViews,
    },
    {
      path: "/Favorites",
      component: FavoritesViews,
    },
    {
      path: "/Basket",
      component: BasketViews,
       meta: {
        middleware: [
          Auth
        ]
      }
    },
    {
      path: "/About",
      component: AboutViews,
    },
    {
      path: "/Profile",
      component: ProfileView,
      name: "Profile",
      meta: {
        middleware: [
          Auth
        ]
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: ErrorViews
    },
    {
      path: "/oneProduct/:id",
      component: OneProductViews,
    },
    {
      path: "/oneCategory/:id",
      component: OneCategoryViews,
    }


  ],
});
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware: any = to.meta.middleware;

  const context = {
    to,
    from,
    next,

  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});
export default router;
