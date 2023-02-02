<template>
    <div>
        <ul>
      <li>{{ msg}}</li>
      <button @click="aa">v-model 22</button>
    </ul>
    </div>
</template>


<script>
  export default {
    model: {    

      prop: 'msg',
      event: 'cc'
    },
    props: {
      msg: ''
    },
    methods: {
      aa () {
        this.$emit('cc', this.msg+2)
      }
    }
  }
</script>