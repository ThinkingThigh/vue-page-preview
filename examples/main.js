import Vue from "vue";
import App from "./App.vue";
import { pagePreview } from "../src/index";
Vue.config.productionTip = false;
Vue.use(pagePreview);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
