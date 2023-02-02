<template>
    <div>
        <!-- 父传子 -->
        <ul>
            <li v-for="user in users " :key="user">{{user}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        users:{
            type:Array,
            required:true
        }
    },
    data() {
        return {
            
        }
    },
}
</script>