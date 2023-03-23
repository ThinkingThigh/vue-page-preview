import pagePreview from "../packages/page-preview";
import pagePopover from "../packages/page-popover";

const components = [pagePreview, pagePopover];
const install = function (Vue, opts = {}) {
  console.log(opts);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { install, pagePreview, pagePopover };
