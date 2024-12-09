import { createApp } from "vue";
import { Quasar, Loading, Dialog, Notify } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";


import App from "./App.vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import router from "./router";

const myApp = createApp(App);

myApp
  .use(Quasar, {
    plugins: {
      Loading,
      Dialog,
      Notify,
    }, 
  })
  .use(router)
  .use(Toast);

myApp.mount("#app");
