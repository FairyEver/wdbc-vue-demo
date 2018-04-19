<template>
  <div style="padding: 50px;">
    <h1>Page7</h1>
    <p>
      <Button @click="$store.commit('add')">add</Button>
      <Button @click="$store.commit('minus')">minus</Button>
    </p>
    <Page7Demo1></Page7Demo1>
    <br>
    <Page7Demo2></Page7Demo2>
    <BackIndex></BackIndex>
  </div>
</template>

<script>
export default {
  components: {
    Page7Demo1: () => import('./components/Page7Demo1.vue'),
    Page7Demo2: () => import('./components/Page7Demo2.vue')
  }
}
</script>
