import { App } from 'vue';
import { default as GeetestCaptcha } from './GeetestCaptcha.vue';
import { CaptchaConfig } from './types/types';

declare const _default: {
    install(app: App, options?: CaptchaConfig): void;
};
export default _default;
export { GeetestCaptcha };
