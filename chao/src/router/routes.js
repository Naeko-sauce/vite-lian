const routes = [
  {
    path: "/",
    // name: 'login',
    component: () => import("@/page/login/lgin.vue"),
  },
  {
    path: "/ce",
    // name: 'practice',
    component: () => import("../page/practice/ce.vue"),
  },
  {
    path: "/ca",
    // name: 'page',
    component: () => import("../page/practice/ca.vue"),
  },
  {
    path: "/puke",
    component: () => import("../page/lun/扑克牌轮播图效果.vue"),
  },
];
export default routes;
