import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "../components/modules/TheLayout.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/dashboard",
    component: TheLayout,
    mata: {
      title: "Dashboard",
    },
    // beforeEnter(from, to, next) {
    //   if (!store.state.idToken) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/layouts/FundAccount.vue"),
        // beforeEnter(from, to, next) {
        //   if (store.state.idToken) {
        //     next();
        //   } else {
        //     next("/login");
        //   }
        // },
        mata: {
          title: "Dashboard - Home",
        },
      },
      {
        path: "/withdraw",
        name: "Withdraw",
        component: () => import("../views/layouts/Withdral.vue"),
        mata: {
          title: "Withdraw",
        },
      },
      {
        path: "/payment",
        name: "payment",
        component: () => import("../views/layouts/Payment.vue"),
        mata: {
          title: "Payment",
        },
      },
      {
        path: "/transaction",
        name: "payment",
        component: () => import("../views/layouts/Payment.vue"),
        mata: {
          title: "Payment",
        },
      },
      {
        path: "/transfer",
        name: "Transfer",
        component: () => import("../views/layouts/Payment.vue"),
        mata: {
          title: "Transfer",
        },
      },
      {
        path: "/set_pin",
        name: "Set_pin",
        component: () => import("../views/layouts/SetPin.vue"),
        mata: {
          title: "Set_pin",
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
