import Vue from "vue";
import ElementUI from "element-ui";
import {router} from "./router.js";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/less/index.less";

Vue.use(ElementUI, {size: "small", zIndex: 3000});

new Vue({router}).$mount("#app");
