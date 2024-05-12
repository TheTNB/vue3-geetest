import { App } from 'vue';
import { CaptchaConfig } from './types/types';

declare const Geetest: {
    install(app: App, options?: CaptchaConfig): void;
};
export default Geetest;
