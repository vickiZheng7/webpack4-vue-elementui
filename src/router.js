import Vue from "vue";
import VueRouter from "vue-router";
import App from "~/views/app.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
   routes: [
       {
           path: "/", component: App
       }
   ]
});