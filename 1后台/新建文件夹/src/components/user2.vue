<template>
    <div>
        <h1 @click="changeTitle">{{title}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'子传父'
        }
    },
    methods: {
        changeTitle(){
            this.$emit('titlechanged','子传父')
        }
    },
}
</script>