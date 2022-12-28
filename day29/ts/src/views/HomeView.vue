<template>
  <div class="home">
    <div class="headers">
      <img src="../assets/头部.png">
    </div>
    <div class="home-one">
      <div class="left">
        <Usertotal></Usertotal>
      </div>
      <div class="right">
        <titlee></titlee>
      </div>
    </div>
  </div>
</template>

<script>
import Usertotal from '../components/Usertotal.vue'
import titlee from '../components/title.vue'
export default {
  data () {
    return {}
  },
  components: {
    Usertotal,
    titlee
  },
  methods: {},
  created () { },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #191919;

  .home-one {
    display: flex;

    .right {
      margin-left: 10px;

    }
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