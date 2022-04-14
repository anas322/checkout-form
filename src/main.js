import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

//vuex
app.use(store);

app.component("base-button", BaseButton);

//mount app
app.mount("#app");
