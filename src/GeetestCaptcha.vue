<template>
  <div :id="captchaId"></div>
</template>

<script lang="ts" setup>
import {inject, onMounted, ref} from 'vue';
import {CaptchaConfig, Props} from '@/types/types';

const config = inject<CaptchaConfig>('geetest-config');
const props = defineProps<Props>()
const emit = defineEmits(['initialized']);
const captchaId = ref(`captcha-${Date.now()}`)

// 合并配置
const mergedConfig = {
  ...config,
  ...props.config
};

onMounted(() => {
  const initCaptcha = (captchaObj: any) => {
    captchaObj.appendTo(`#${captchaId.value}`);
    emit('initialized', captchaObj);
  };

  if (window.initGeetest4) {
    window.initGeetest4(mergedConfig, initCaptcha);
  } else {
    console.error('Geetest library not loaded');
  }
});
</script>