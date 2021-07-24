import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from "@/store";
import Notifications from '@kyvg/vue3-notification'
// import until from "./until";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Notifications)
// app.use(until);
app.mount("#app");