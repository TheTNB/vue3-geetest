<template>
  <div :id="captchaId"></div>
</template>

<script lang="ts" setup>
import {inject, onMounted, ref, watch, nextTick, onUnmounted} from 'vue';
import { CaptchaConfig, Props } from '@/types/types';

const config = inject<CaptchaConfig>('geetest-config');
const props = defineProps<Props>()
const emit = defineEmits(['initialized']);
const captchaId = ref(`captcha-${Date.now()}`);
const gt4Loaded = ref(false);
let instance: any;

// 合并配置
const mergedConfig = {
  ...config,
  ...props.config
};

const loadGt4 = () => {
  const el = document.getElementById('geetest');
  if (el) {
    gt4Loaded.value = true;
    return;
  }

  const script = document.createElement('script');
  script.id = 'geetest';
  script.src = 'https://static.geetest.com/v4/gt4.js';
  script.onload = () => {
    gt4Loaded.value = true;
  };
  script.onerror = () => {
    console.error('Failed to load Geetest');
  };
  document.head.appendChild(script);
}

const initGeetest = () => {
  if (window.initGeetest4 && gt4Loaded.value) {
    window.initGeetest4(mergedConfig, (captchaObj: any) => {
      instance = captchaObj;
      instance.appendTo(`#${captchaId.value}`);
      emit('initialized', instance);
    });
  } else {
    console.error('Geetest not loaded or initGeetest4 is not available');
  }
}

onMounted(() => {
  loadGt4();
  watch(gt4Loaded, (loaded) => {
    if (loaded) {
      nextTick(() => {
        initGeetest();
      });
    }
  });
});
onUnmounted(() => {
  instance?.destroy();
});
</script>
