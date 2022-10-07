import { App } from "vue";

import HelloWorld from "./HelloWorld.vue";
import InputComp from "./InputComp.vue";

export const install = (app: App) => {
  app.component("HelloWorld", HelloWorld);
  app.component("InputComp", InputComp);
};

export default install;
