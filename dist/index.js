import { defineComponent as g, inject as m, ref as c, onMounted as f, watch as h, nextTick as v, openBlock as G, createElementBlock as _ } from "vue";
const C = ["id"], w = /* @__PURE__ */ g({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(n, { emit: i }) {
    const a = m("geetest-config"), l = n, d = i, s = c(`captcha-${Date.now()}`), o = c(!1), r = {
      ...a,
      ...l.config
    }, p = () => {
      if (document.getElementById("geetest")) {
        o.value = !0;
        return;
      }
      const t = document.createElement("script");
      t.id = "geetest", t.src = "https://static.geetest.com/v4/gt4.js", t.onload = () => {
        o.value = !0;
      }, t.onerror = () => {
        console.error("Failed to load Geetest");
      }, document.head.appendChild(t);
    }, u = () => {
      window.initGeetest4 && o.value ? window.initGeetest4(r, (e) => {
        console.log(`Captcha initialized: ${s.value}`), e.appendTo(`#${s.value}`), d("initialized", e);
      }) : console.error("Geetest not loaded or initGeetest4 is not available");
    };
    return f(() => {
      console.log(`gt4Loaded: ${o.value}`), h(o, (e) => {
        e && v(() => {
          u();
        });
      }), p();
    }), (e, t) => (G(), _("div", { id: s.value }, null, 8, C));
  }
}), k = {
  install(n, i) {
    n.component("GeetestCaptcha", w), i && n.provide("geetest-config", i);
  }
};
export {
  w as GeetestCaptcha,
  k as default
};
