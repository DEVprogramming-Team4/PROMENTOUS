import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import gAuthPlugin from "vue3-google-oauth2";
// let gauthClientId = "442992845305-oe3tmcff9s3qpj559h36doutbqhk06su";

const app = createApp(App);
// app.use(gAuthPlugin, {
//   clientId: gauthClientId,
//   scope: "email",
//   prompt: "consent",
//   fetch_basic_profile: false
// });
app.use(store);
app.use(router);
app.mount("#app");

// createApp(App).use(store).use(router).mount("#app");
