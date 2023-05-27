import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Aos from "aos";
import "@vuelidate/core";
import "@vuelidate/validators";
// import Vuelidate from "vuelidate";

import "aos/dist/aos.css";

Aos.init();
createApp(App).use(store).use(router).mount("#app");
