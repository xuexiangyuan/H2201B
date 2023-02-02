<template>
  <div>
    <span>{{Value}}</span>
    <button @click="dj">点击</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        Value: '111'
      }
    },
    methods: {
      dj () {
        this.$emit('childByValue', this.Value++)
      }
    }
  }
</script>