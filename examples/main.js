import Vue from "vue";
import App from "./App.vue";
import { pagePreview, pageIndex } from "../src/index";
Vue.config.productionTip = false;
Vue.use(pagePreview);
Vue.use(pageIndex);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
