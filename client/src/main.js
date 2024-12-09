// FILE: main.js

import { createApp } from "vue";
import { Quasar, Loading, Notify } from "quasar";
import { QSpinnerCube } from "quasar";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";


import App from "./App.vue";
import router from "./router/index";

const options = {
  timeout: 3000,
};

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {
    Loading,
    Notify
  },
  config: {
    loading: {
      spinner: QSpinnerCube,
      message: "Loading...",
    },
  },
});

myApp.use(router);
myApp.use(Toast, options);

myApp.mount("#app");