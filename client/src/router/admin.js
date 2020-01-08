import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

let isConnection = false;
import { Connection } from "@/socketio_admin";

import Layout from "@/pages/admin/layout";

/**
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/login",
      name: "AdminLogin",
      component: () => import("@/pages/admin/AdminLogin"),
      hidden: true
    },
    {
      path: "/",
      component: Layout,
      redirect: "/editUser",
      hidden: true
    },
    // user moduel
    {
      path: "/editUser",
      component: Layout,
      children: [
        {
          path: "",
          name: "EditUser",
          meta: {
            requireLogin: true,
            title: "Member management",
            icon: "el-icon-user-solid"
          },
          component: () => import("@/pages/admin/EditUser")
        }
      ]
    },
    // goods module
    {
      path: "/goods",
      component: Layout,
      meta: {
        title: "commodity management"
      },
      children: [
        {
          path: "",
          name: "Goods",
          meta: {
            requireLogin: true,
            title: "product list",
            icon: "el-icon-s-goods"
          },
          component: () => import("@/pages/admin/Goods")
        },
        {
          path: ":id",
          name: "EditGoods",
          component: () => import("@/pages/admin/EditGoods"),
          hidden: true,
          meta: {
            title: "Commodities editor",
            requireLogin: true
          }
        }
      ]
    },
    // order module
    {
      path: "/orders",
      component: Layout,
      meta: {
        icon: "el-icon-document",
        title: "Order management"
      },
      children: [
        {
          path: "",
          name: "Orders",
          meta: {
            title: "Order list",
            icon: "el-icon-s-claim",
            requireLogin: true
          },
          component: () => import("@/pages/admin/Orders")
        },
        {
          path: "d/:id",
          name: "EditOrders",
          hidden: true,
          component: () => import("@/pages/admin/EditOrders"),
          meta: {
            title: "Order detail",
            requireLogin: true
          }
        },
        {
          path: "messages",
          name: "Messages",
          component: () => import("@/pages/admin/Messages"),
          meta: {
            title: "Comments",
            icon: "el-icon-s-comment",
            requireLogin: true
          }
        }
      ]
    },
    // system module
    {
      path: "/system",
      component: Layout,
      meta: {
        title: "system management",
        icon: "el-icon-setting"
      },
      children: [
        {
          path: "editAdmin",
          name: "EditAdmin",
          component: () => import("@/pages/admin/EditAdmin"),
          meta: {
            requireLogin: true,
            title: "Edit Profile",
            icon: "el-icon-setting"
          }
        }
      ]
    },
    {
      //404
      path: "*",
      name: "ErrorPage",
      component: () => import("@/pages/ErrorPage")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

//登录拦截
router.beforeEach((to, from, next) => {
  try {
    if (to.meta.requireLogin) {
      if (store.getters.adminToken) {
        !isConnection && Connection(store.getters.adminToken);
        isConnection = true;
        // SET_TOKEN(store.getters.adminToken);
        // // setTimeout(() => {
        // // }, 2000);
        // console.log(Vue.$socket);
        next();
      } else {
        next({
          path: "/login",
          query: { redirect: to.fullPath }
        });
      }
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export default router;
