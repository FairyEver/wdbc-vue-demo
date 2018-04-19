<template>
  <div style="padding: 50px;">
    <h1>Page8 vue-plugin</h1>
    <p>value : {{value}}</p>
    <EffectInput v-model="value" type="haruki" label="姓名"></EffectInput>
    <BackIndex></BackIndex>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

