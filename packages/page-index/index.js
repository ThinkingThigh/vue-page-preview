import pageIndex from "./src/index.vue";
pageIndex.install = function (Vue) {
  Vue.component(pageIndex.name, pageIndex);
};
export default pageIndex;
