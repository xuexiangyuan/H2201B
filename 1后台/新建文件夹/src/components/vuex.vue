<template>
    <div>
        <input type="text" v-model="name">
        <button @click="dian">点击传值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:''
        }
    },
    methods: {
        dian(){
            this.$store.commit('setname',this.name)
        }
    },
}
</script>