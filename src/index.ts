import {App} from 'vue';
import GeetestCaptcha from './GeetestCaptcha.vue';
import {CaptchaConfig} from "@/types/types";

const Geetest = {
    install(app: App, options?: CaptchaConfig) {
        app.component('GeetestCaptcha', GeetestCaptcha);
        if (options) {
            app.provide('geetest-config', options);
        }
    }
};

export default Geetest;
export {GeetestCaptcha};
export type {CaptchaConfig};
