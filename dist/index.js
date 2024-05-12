import { defineComponent as d, inject as l, ref as p, onMounted as m, openBlock as f, createElementBlock as u } from "vue";
const g = ["id"], h = /* @__PURE__ */ d({
  __name: "GeetestCaptcha",
  props: {
    config: {}
  },
  emits: ["initialized"],
  setup(t, { emit: e }) {
    const c = l("geetestConfig"), s = t, a = e, o = p(`captcha-${Date.now()}`), r = {
      ...c,
      ...s.config
    };
    return m(() => {
      const i = (n) => {
        n.appendTo(`#${o.value}`), a("initialized", n);
      };
      window.initGeetest4 ? window.initGeetest4(r, i) : console.error("Geetest library not loaded");
    }), (i, n) => (f(), u("div", { id: o.value }, null, 8, g));
  }
});
function C(t) {
  const e = document.createElement("script");
  e.src = "https://static.geetest.com/v4/gt4.js", e.async = !0, e.onload = t, e.onerror = () => {
    console.error("Failed to load the Geetest JavaScript library.");
  }, document.head.appendChild(e);
}
const _ = {
  install(t, e) {
    C(() => {
      t.component("GeetestCaptcha", h), e && t.provide("geetestConfig", e);
    });
  }
};
export {
  h as GeetestCaptcha,
  _ as default
};
