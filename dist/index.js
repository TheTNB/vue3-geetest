import { defineComponent as g, inject as u, ref as a, onMounted as h, watch as G, nextTick as v, onUnmounted as _, openBlock as w, createElementBlock as C } from "vue";
const B = ["id"], E = /* @__PURE__ */ g({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(n, { emit: i }) {
    const d = u("geetest-config"), l = n, r = i, c = a(`captcha-${Date.now()}`), s = a(!1);
    let t;
    const m = {
      ...d,
      ...l.config
    }, p = () => {
      const e = document.getElementById("geetest");
      e && e.remove();
      const o = document.createElement("script");
      o.id = "geetest", o.src = "https://static.geetest.com/v4/gt4.js", o.onload = () => {
        s.value = !0;
      }, o.onerror = () => {
        console.error("Failed to load Geetest");
      }, document.head.appendChild(o);
    }, f = () => {
      window.initGeetest4 && s.value ? window.initGeetest4(m, (e) => {
        t = e, t.appendTo(`#${c.value}`), r("initialized", t);
      }) : console.error("Geetest not loaded or initGeetest4 is not available");
    };
    return h(() => {
      p(), G(s, (e) => {
        e && v(() => {
          f();
        });
      });
    }), _(() => {
      const e = document.getElementById("geetest");
      e && e.remove(), t == null || t.destroy();
    }), (e, o) => (w(), C("div", { id: c.value }, null, 8, B));
  }
}), x = {
  install(n, i) {
    n.component("GeetestCaptcha", E), i && n.provide("geetest-config", i);
  }
};
export {
  E as GeetestCaptcha,
  x as default
};
