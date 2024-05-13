# Vue3 Geetest

## 安装

使用 npm 安装：

```bash
npm install vue3-geetest
```

## 使用

首先在 main.ts 中引入并注册组件：

```ts
import { Geetest } from 'vue3-geetest'

app.use(Geetest, {
    captchaId: 'xxx'
})
```

然后在可直接在 vue 模板中使用：

```vue
<template>
  <GeetestCaptcha :config="config" @initialized="getCaptcha" />
</template>

<script setup lang="ts">
import { GeetestCaptcha } from 'vue3-geetest'
import type { CaptchaConfig } from 'vue3-geetest'

const config: CaptchaConfig = {
  product: 'popup',
  nativeButton: {
    width: '100%',
    height: '50px'
  }
}

const getCaptcha = (instance: any) => {
  instance
    .onReady(function () {
      console.log('ready')
    })
    .onNextReady(function () {
      console.log('nextReady')
    })
    .onBoxShow(function () {
      console.log('boxShow')
    })
    .onError(function (e: any) {
      console.log(e)
    })
    .onSuccess(function () {
      console.log('success')
    })
}
</script>
```

instance 为极验实例对象，具体 API 方法可参考[极验文档](https://docs.geetest.com/gt4/apirefer/api/web/#appendTo-position)
