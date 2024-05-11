import GeetestCaptcha from './GeetestCaptcha.vue';
function loadGeetestScript(callback) {
    var script = document.createElement('script');
    script.src = 'https://static.geetest.com/v4/gt4.js';
    script.async = true;
    script.onload = callback;
    script.onerror = function () {
        console.error('Failed to load the Geetest JavaScript library.');
    };
    document.head.appendChild(script);
}
export default {
    install: function (app, options) {
        loadGeetestScript(function () {
            // 在库加载后进行插件的其他初始化
            app.component('GeetestCaptcha', GeetestCaptcha);
        });
    }
};
