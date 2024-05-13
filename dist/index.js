import { defineComponent as u, inject as f, ref as c, onMounted as g, watch as G, nextTick as h, openBlock as v, createElementBlock as _ } from "vue";
const w = ["id"], C = /* @__PURE__ */ u({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(o, { emit: n }) {
    const a = f("geetest-config"), d = o, l = n, s = c(`captcha-${Date.now()}`), i = c(!1), r = {
      ...a,
      ...d.config
    }, p = () => {
      if (document.getElementById("geetest")) {
        i.value = !0;
        return;
      }
      const t = document.createElement("script");
      t.id = "geetest", t.src = "https://static.geetest.com/v4/gt4.js", t.onload = () => {
        i.value = !0;
      }, t.onerror = () => {
        console.error("Failed to load Geetest");
      }, document.head.appendChild(t);
    }, m = () => {
      window.initGeetest4 && i.value ? window.initGeetest4(r, (e) => {
        e.appendTo(`#${s.value}`), l("initialized", e);
      }) : console.error("Geetest not loaded or initGeetest4 is not available");
    };
    return g(() => {
      G(i, (e) => {
        e && h(() => {
          m();
        });
      }), p();
    }), (e, t) => (v(), _("div", { id: s.value }, null, 8, w));
  }
}), x = {
  install(o, n) {
    o.component("GeetestCaptcha", C), n && o.provide("geetest-config", n);
  }
};
export {
  C as GeetestCaptcha,
  x as default
};
