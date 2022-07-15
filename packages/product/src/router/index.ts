const routes = [
  {
    path: "/productList",
    name: "productList",
    component: () =>
      import(/* webpackChunkName: "productList" */ "@/views/echarts/index.vue"),
  },
  {
    path: "/productAdd",
    name: "productAdd",
    component: () =>
      import(
        /* webpackChunkName: "productList" */ "@/views/table-edit/index.vue"
      ),
  },
];

export default routes;
