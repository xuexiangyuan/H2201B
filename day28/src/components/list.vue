<template>
    <div>
        <h1>{{counnt}}</h1>
        <button @click="counnt++">求和</button>
    </div>
</template>

<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUmounted} from 'vue'

export default {
    setup() {
        let counnt =ref(1)

        // onBeforeMount(()=>{
        //     console.log('onBeforeMount');
        // })

        // onMounted(()=>{
        //     console.log('onMounted');
        // })

        //  onBeforeUpdate(()=>{
        //     console.log('onBeforeUpdate');
        // })

        // onUpdated(()=>{
        //     console.log('onUpdated');
        // })

        // onBeforeUnmount(()=>{
        //     console.log('onBeforeUnmount');
        // })

        // onUmounted(()=>{
        //     console.log('onUmounted');
        // })



        //  onBeforeMount(()=>{
        //     console.log('onBeforeMount');
        // })

        // onMounted(()=>{
        //     console.log('onMounted');
        // })

        //  onBeforeUpdate(()=>{
        //     console.log('onBeforeUpdate');
        // })

        // onUpdated(()=>{
        //     console.log('onUpdated');
        // })

        // onBeforeUnmount(()=>{
        //     console.log('onBeforeUnmount');
        // })

        // onUmounted(()=>{
        //     console.log('onUmounted');
        // })



         onBeforeMount(()=>{
            console.log('onBeforeMount');
        })

        onMounted(()=>{
            console.log('onMounted');
        })

         onBeforeUpdate(()=>{
            console.log('onBeforeUpdate');
        })

        onUpdated(()=>{
            console.log('onUpdated');
        })

        onBeforeUnmount(()=>{
            console.log('onBeforeUnmount');
        })

        onUmounted(()=>{
            console.log('onUmounted');
        })

        return{
            counnt,
        }
    }    
}
</script>