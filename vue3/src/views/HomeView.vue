<template>
  <div class="home">
    <div class="headers">
      <img src="../assets/头部.png">
    </div>
    <div class="left">
      <Usertotal></Usertotal>
    </div>
  </div>
</template>

<script>
import Usertotal from '../components/Usertotal.vue'
export default {
  data () {
    return {}
  },
  created() {
    this.$http({
      method:'get',
      url:'screen/data'
    }).then(res=>{
      console.log(res);
    })
  },
  components: {
    Usertotal
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  .left {
    width: 350px;
  }
}

.headers {
  height: 65px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>