import { App } from 'vue';
import GeetestCaptcha from './GeetestCaptcha.vue';
import {CaptchaConfig} from "@/types/types";

function loadGeetestScript(callback: () => void) {
    const script = document.createElement('script');
    script.src = 'https://static.geetest.com/v4/gt4.js';
    script.async = true;
    script.onload = callback;
    script.onerror = () => {
        console.error('Failed to load the Geetest JavaScript library.');
    };
    document.head.appendChild(script);
}

export default {
    install(app: App, options?: CaptchaConfig) {
        loadGeetestScript(() => {
            app.component('GeetestCaptcha', GeetestCaptcha);
            if (options) {
                app.provide('geetest-config', options);
            }
        });
    }
}

export { GeetestCaptcha };
