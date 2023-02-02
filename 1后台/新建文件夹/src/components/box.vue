<template>
    <div>
        <p>box1组件</p>
        <p>{{msgg}}</p>
        <box1></box1>
    </div>
</template>

<script>
import box1 from '../components/box1.vue'
export default {
    components:{
        box1
    },
    data() {
        return {
            
        }
    },
    inject:["msgg"],
   
}
</script>