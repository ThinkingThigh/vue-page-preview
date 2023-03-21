import pagePreview from "../packages/page-preview";
const components = [pagePreview];
const install = function (Vue, opts = {}) {
  console.log(opts);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { install, pagePreview };
