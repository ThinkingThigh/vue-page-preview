import pagePreview from "./src/index.vue";
pagePreview.install = function (Vue) {
  Vue.component(pagePreview.name, pagePreview);
};
export default pagePreview;
