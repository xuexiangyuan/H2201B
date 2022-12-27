<template>
  <div class="home"></div>
  <h3>{{point}}</h3>
</template>

<script >
import { defineComponent } from "vue";
import usePoint from '../hooks/usePoint.js'

export default defineComponent({
  setup(){
    const point=usePoint()

    return{ 
      point,
    }
  }
  
});
</script>
