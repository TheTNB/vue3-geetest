<template>
  <div :id="captchaId"></div>
</template>

<script lang="ts" setup>
import {inject, onMounted, ref} from 'vue';
import {CaptchaConfig, Props} from '@/types/types';

const config = inject<CaptchaConfig>('geetest-config');
const props = defineProps<Props>()
const emit = defineEmits(['initialized']);
const captchaId = ref(`captcha-${Date.now()}`);

// 合并配置
const mergedConfig = {
  ...config,
  ...props.config
};

const loadGt4 = () => {
  const el = document.getElementById('geetest');
  // 已经加载过了，直接初始化
  if (el && window.initGeetest4) {
    initGeetest();
    return;
  }
  // 加载过但是没有全局对象，尝试重新加载
  if (el) {
    el.remove();
  }

  const script = document.createElement('script');
  script.id = 'geetest';
  script.src = 'https://static.geetest.com/v4/gt4.js';
  script.onload = () => {
    initGeetest();
  };
  script.onerror = () => {
    console.error('Failed to load Geetest');
  };
  document.head.appendChild(script);
}

const initGeetest = () => {
  if (window.initGeetest4) {
    window.initGeetest4(mergedConfig, (captchaObj: any) => {
      captchaObj.appendTo(`#${captchaId.value}`);
      emit('initialized', captchaObj);
    });
  } else {
    console.error('Geetest not loaded or initGeetest4 is not available');
  }
}

onMounted(() => {
  loadGt4();
});
</script>
