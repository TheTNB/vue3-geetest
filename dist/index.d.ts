import { App } from 'vue';
import { default as GeetestCaptcha } from './GeetestCaptcha.vue';
import { CaptchaConfig } from './types/types';

declare const Geetest: {
    install(app: App, options?: CaptchaConfig): void;
};
export { Geetest, GeetestCaptcha };
export type { CaptchaConfig };
