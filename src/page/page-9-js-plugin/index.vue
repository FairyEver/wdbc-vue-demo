<template>
  <div style="padding: 50px;">
    <h1>Page9 js-plugin</h1>
    <Button @click="swal('Hello')">@click="swal('Hello')"</Button>
    <BackIndex></BackIndex>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  methods: {
    swal (text) {
      swal ({text})
    }
  }
}
</script>
