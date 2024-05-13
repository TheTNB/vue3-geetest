import { defineComponent as p, inject as m, ref as g, onMounted as f, openBlock as u, createElementBlock as G } from "vue";
const h = ["id"], _ = /* @__PURE__ */ p({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(t, { emit: o }) {
    const c = m("geetest-config"), a = t, r = o, i = g(`captcha-${Date.now()}`), d = {
      ...c,
      ...a.config
    }, l = () => {
      if (document.getElementById("geetest")) {
        s();
        return;
      }
      const e = document.createElement("script");
      e.id = "geetest", e.src = "https://static.geetest.com/v4/gt4.js", e.onload = () => {
        s();
      }, e.onerror = () => {
        console.error("Failed to load Geetest");
      }, document.head.appendChild(e);
    }, s = () => {
      window.initGeetest4 ? window.initGeetest4(d, (n) => {
        n.appendTo(`#${i.value}`), r("initialized", n);
      }) : console.error("Geetest not loaded or initGeetest4 is not available");
    };
    return f(() => {
      l();
    }), (n, e) => (u(), G("div", { id: i.value }, null, 8, h));
  }
}), C = {
  install(t, o) {
    t.component("GeetestCaptcha", _), o && t.provide("geetest-config", o);
  }
};
export {
  C as Geetest,
  _ as GeetestCaptcha
};
