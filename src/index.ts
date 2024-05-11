import GeetestCaptcha from './GeetestCaptcha.vue';
import { App } from 'vue';

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
    install(app: App, options?: any) {
        loadGeetestScript(() => {
            app.component('GeetestCaptcha', GeetestCaptcha);
        });
    }
}
