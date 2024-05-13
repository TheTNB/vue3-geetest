import { defineComponent as p, inject as m, ref as c, onMounted as f, watch as h, nextTick as v, openBlock as G, createElementBlock as C } from "vue";
const _ = ["id"], $ = /* @__PURE__ */ p({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(n, { emit: i }) {
    const a = m("geetest-config"), l = n, d = i, s = c(`captcha-${Date.now()}`), t = c(!1), r = {
      ...a,
      ...l.config
    }, g = () => {
      if (document.getElementById("geetest")) {
        t.value = !0;
        return;
      }
      const o = document.createElement("script");
      o.id = "geetest", o.src = "https://static.geetest.com/v4/gt4.js", o.onload = () => {
        t.value = !0;
      }, o.onerror = () => {
        console.error("Failed to load Geetest");
      }, document.head.appendChild(o);
    }, u = () => {
      console.log(`Initializing Geetest: ${s.value}`), console.log(`gt4Loaded: ${t.value}`), window.initGeetest4 && t.value ? window.initGeetest4(r, (e) => {
        console.log(`Captcha initialized: ${s.value}`), e.appendTo(`#${s.value}`), d("initialized", e);
      }) : console.error("Geetest not loaded or initGeetest4 is not available");
    };
    return f(() => {
      g(), console.log("GeetestCaptcha mounted"), console.log(`gt4Loaded: ${t.value}`), h(t, (e) => {
        console.log(`gt4Loaded changed: ${e}`), e && v(() => {
          u();
        });
      });
    }), (e, o) => (G(), C("div", { id: s.value }, null, 8, _));
  }
}), z = {
  install(n, i) {
    n.component("GeetestCaptcha", $), i && n.provide("geetest-config", i);
  }
};
export {
  $ as GeetestCaptcha,
  z as default
};
