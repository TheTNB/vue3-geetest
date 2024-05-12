import { defineComponent as d, inject as l, ref as p, onMounted as m, openBlock as f, createElementBlock as u } from "vue";
const g = ["id"], h = /* @__PURE__ */ d({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(t, { emit: e }) {
    const c = l("geetest-config"), s = t, a = e, n = p(`captcha-${Date.now()}`), r = {
      ...c,
      ...s.config
    };
    return m(() => {
      const i = (o) => {
        o.appendTo(`#${n.value}`), a("initialized", o);
      };
      window.initGeetest4 ? window.initGeetest4(r, i) : console.error("Geetest library not loaded");
    }), (i, o) => (f(), u("div", { id: n.value }, null, 8, g));
  }
});
function G(t) {
  const e = document.createElement("script");
  e.src = "https://static.geetest.com/v4/gt4.js", e.async = !0, e.onload = t, e.onerror = () => {
    console.error("Failed to load the Geetest JavaScript library.");
  }, document.head.appendChild(e);
}
const C = {
  install(t, e) {
    G(() => {
      t.component("GeetestCaptcha", h), e && t.provide("geetest-config", e);
    });
  }
};
export {
  h as GeetestCaptcha,
  C as default
};
