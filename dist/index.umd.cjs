(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.Vue3Geetest={},t.Vue))})(this,function(t,e){"use strict";const r=["id"],a=e.defineComponent({__name:"GeetestCaptcha",props:{config:{}},emits:["initialized"],setup(s,{emit:c}){const u=e.inject("geetest-config"),p=s,m=c,l=e.ref(`captcha-${Date.now()}`),d=e.ref(!1);let n;const g={...u,...p.config},h=()=>{if(document.getElementById("geetest")){d.value=!0;return}const o=document.createElement("script");o.id="geetest",o.src="https://static.geetest.com/v4/gt4.js",o.onload=()=>{d.value=!0},o.onerror=()=>{console.error("Failed to load Geetest")},document.head.appendChild(o)},G=()=>{window.initGeetest4&&d.value?window.initGeetest4(g,i=>{n=i,n.appendTo(`#${l.value}`),m("initialized",n)}):console.error("Geetest not loaded or initGeetest4 is not available")};return e.onMounted(()=>{h(),e.watch(d,i=>{i&&e.nextTick(()=>{G()})})}),e.onUnmounted(()=>{n==null||n.destroy()}),(i,o)=>(e.openBlock(),e.createElementBlock("div",{id:l.value},null,8,r))}}),f={install(s,c){s.component("GeetestCaptcha",a),c&&s.provide("geetest-config",c)}};t.GeetestCaptcha=a,t.default=f,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
