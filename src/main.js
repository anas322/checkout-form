import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

//vuex
app.use(store);

//mount app
app.mount("#app");
