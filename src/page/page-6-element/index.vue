<template>
  <div style="padding: 50px;">
    <h1>Page6 Element</h1>
    <p>value : {{value}}</p>
    <el-slider v-model="value"></el-slider>
    <BackIndex></BackIndex>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 50
    }
  }
}
</script>
