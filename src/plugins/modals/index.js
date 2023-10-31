import { reactive } from "vue";
import Modal from "./Modal.vue";

const current = reactive({ name: "", resolve: null, reject: null });
const api = {
  active() {
    return current.name;
  },
  show(name) {
    current.name = name;
    return new Promise((resolve = () => {}, reject = () => {}) => {
      current.resolve = resolve;
      current.reject = reject;
    });
  },
  accept() {
    current.resolve();
    current.name = "";
  },
  cancel() {
    current.reject();
    current.name = "";
  },
};
const plugin = {
  install(App, options) {
    App.component("Modal", Modal);
    App.provide("$modals", api);
  },
};
export default plugin;
