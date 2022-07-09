import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";
import "@/styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/ys.css";
import "@/styles/ih_kim.css";
import "@/styles/yuri.css";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import StarRating from "vue-star-rating";
import vue3GoogleLogin from "vue3-google-login";

createApp(App)
  .use(store)
  .use(router)
  .mixin(mixins)
  .component("Datepicker", Datepicker)
  .component("StarRating", StarRating)
  .use(vue3GoogleLogin, {
    clientId:
      "442992845305-oe3tmcff9s3qpj559h36doutbqhk06su.apps.googleusercontent.com"
  })
  .mount("#app");
