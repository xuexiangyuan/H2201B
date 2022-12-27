<template>
  <div class="about">
    <mychild msg="我是来传递一个参数的" :change="change"/>
    <!-- <list/> -->
  </div>
</template>


<script>
import mychild from '../components/MyChild.vue'
// import list from '../components/list.vue'

export default {
  components:{
    mychild,
    // list,
  },
  // setup(props) {
  //   function change(value){
  //     console.log(value,'子组件触发我了');
  //   }
  // setup(props) {
  //   function change(value){
  //     console.log(value,'子组件触发我了');
  //   }
  setup(props) {
    function change(value){
      console.log(value,'子组件触发我了');
    }

    return{
      change
    }
  }
}
</script>