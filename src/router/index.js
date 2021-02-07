import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from "layouts/index.vue";

export const routes = [ 
  {
    path: '/',
    redirect: "/home",
    component: Layout,
    meta: { title: "首页", icon: "el-icon-s-home" },
    children: [
      {
        path: '/home',
        component: () => import("views/home/home.vue"),
        name: "Home",
        meta: { title: "首页", icon: "el-icon-s-promotion" },
        children: [
          {
            path: ":id",
            component: () => import("views/home/detail.vue"),
            name: "Detail",
            hidden: true,
            meta: {
              title: "详情",
              icon: "el-icon-s-home",
              activeMenu: "/home",
            },
          },
        ]
      }
    ]
  },
  {
    path: "/users",
    component: Layout,
    meta: {
      title: "用户管理",
      icon: "el-icon-user-solid",
    },
    redirect: '/users/list',
    children: [
      {
        path: "list",
        component: () => import("views/users/list.vue"),
        meta: {
          title: "用户列表",
          icon: "el-icon-document",
        },
      },
      {
        path: "create",
        component: () => import("views/users/create.vue"),
        hidden: true,
        meta: {
          title: "创建新用户",
          activeMenu: "/users/list",
        },
      },
      {
        path: "edit/:id(\\d+)",
        name: "userEdit",
        component: () => import("views/users/edit.vue"),
        hidden: true,
        meta: {
          title: "编辑用户信息",
          activeMenu: "/users/list",
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
