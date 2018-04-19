<template>
  <p
    style="border-left: 4px solid #333; padding-left: 10px;">
    Hello, {{name}}, hhh~ your name have {{name.length}} letters
  </p>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: '-'
    }
  }
}
</script>
