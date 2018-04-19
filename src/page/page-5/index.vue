<template>
  <div style="padding: 50px;">
    <h1>Page5</h1>
    component prop
    <Page5ListItem name="lucy"></Page5ListItem>
    <Page5ListItem name="Ben"></Page5ListItem>
    <Page5ListItem name="Candy"></Page5ListItem>
    <BackIndex></BackIndex>
  </div>
</template>

<script>
export default {
  components: {
    // 局部注册 Page5ListItem 组件
    Page5ListItem: () => import('./components/Page5ListItem.vue')
  }
}
</script>
