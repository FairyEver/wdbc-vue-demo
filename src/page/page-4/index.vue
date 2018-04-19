<template>
  <div style="padding: 50px;">
    <h1>Page4</h1>
    I am in page-3
    <SayHello></SayHello>
  </div>
</template>

<script>
export default {
  components: {
    // 局部注册 SayHello 组件
    SayHello: () => import('./components/SayHello.vue')
  }
}
</script>
