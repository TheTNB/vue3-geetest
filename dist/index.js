import { defineComponent as f, inject as g, ref as a, onMounted as h, watch as G, nextTick as v, onUnmounted as _, openBlock as w, createElementBlock as C } from "vue";
const k = ["id"], x = /* @__PURE__ */ f({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(n, { emit: i }) {
    const d = g("geetest-config"), l = n, r = i, c = a(`captcha-${Date.now()}`), s = a(!1);
    let e;
    const p = {
      ...d,
      ...l.config
    }, m = () => {
      if (document.getElementById("geetest")) {
        s.value = !0;
        return;
      }
      const t = document.createElement("script");
      t.id = "geetest", t.src = "https://static.geetest.com/v4/gt4.js", t.onload = () => {
        s.value = !0;
      }, t.onerror = () => {
        console.error("Failed to load Geetest");
      }, document.head.appendChild(t);
    }, u = () => {
      window.initGeetest4 && s.value ? window.initGeetest4(p, (o) => {
        e = o, e.appendTo(`#${c.value}`), r("initialized", e);
      }) : console.error("Geetest not loaded or initGeetest4 is not available");
    };
    return h(() => {
      m(), G(s, (o) => {
        o && v(() => {
          u();
        });
      });
    }), _(() => {
      e == null || e.destroy();
    }), (o, t) => (w(), C("div", { id: c.value }, null, 8, k));
  }
}), E = {
  install(n, i) {
    n.component("GeetestCaptcha", x), i && n.provide("geetest-config", i);
  }
};
export {
  x as GeetestCaptcha,
  E as default
};
