<template>
    <div>
       <h2>学生姓名:{{name}}</h2>
       <h2>学生性别:{{sex}}</h2>
       <button @click="sendStudentName">把学生名给school组件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name:'张三',
            sex:'男'
        }
    },
    methods: {
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    },
}
</script>

<style scoped lang="css">
div {
	border: 1px solid black;
}
</style>