import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("FooterContents", {
  data: () => ({
    year: new Date().getFullYear(),
  }),
  template: `
    <hr/>
    <p style="text-align:center;">
      &copy;hoge {{year}}
    </p>
  `,
});
app.mount("#app");
