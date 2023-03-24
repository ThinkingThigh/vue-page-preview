import pagePreview from "../packages/page-preview";
import pageIndex from "../packages/page-index";

const components = [pagePreview, pageIndex];
const install = function (Vue, opts = {}) {
  console.log(opts);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { install, pagePreview, pageIndex };
