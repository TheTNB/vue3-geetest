import { defineComponent as p, inject as m, ref as f, onMounted as g, openBlock as G, createElementBlock as u } from "vue";
const h = ["id"], _ = /* @__PURE__ */ p({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(o, { emit: n }) {
    const c = m("geetest-config"), a = o, r = n, i = f(`captcha-${Date.now()}`), d = {
      ...c,
      ...a.config
    }, l = () => {
      const e = document.getElementById("geetest");
      if (e && window.initGeetest4) {
        s();
        return;
      }
      e && e.remove();
      const t = document.createElement("script");
      t.id = "geetest", t.src = "https://static.geetest.com/v4/gt4.js", t.onload = () => {
        s();
      }, t.onerror = () => {
        console.error("Failed to load Geetest");
      }, document.head.appendChild(t);
    }, s = () => {
      window.initGeetest4 ? window.initGeetest4(d, (e) => {
        e.appendTo(`#${i.value}`), r("initialized", e);
      }) : console.error("Geetest not loaded or initGeetest4 is not available");
    };
    return g(() => {
      l();
    }), (e, t) => (G(), u("div", { id: i.value }, null, 8, h));
  }
}), w = {
  install(o, n) {
    o.component("GeetestCaptcha", _), n && o.provide("geetest-config", n);
  }
};
export {
  w as Geetest,
  _ as GeetestCaptcha
};
