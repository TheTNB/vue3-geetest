<template>
    <div id="captcha"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {Props} from '@/types/types';

const props = defineProps<Props>()
const emit = defineEmits(['initialized']);

onMounted(() => {
    const initCaptcha = (captchaObj: any) => {
        captchaObj.appendTo('#captcha');
        emit('initialized', captchaObj);
    };

    if (window.initGeetest4) {
        window.initGeetest4(props.config, initCaptcha);
    } else {
        console.error('Geetest library not loaded');
    }
});
</script>