<template>
    <div class="homee">
        <ul>
            <li v-for="item,index in list " :key="index">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    name:'ALL'
                },
                {
                    name:'北京'
                },
                {
                    name:'上海'
                },
                {
                    name:'深圳'
                },
                {
                    name:'杭州'
                },
                {
                    name:'南京'
                },
                {
                    name:'武汉'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .homee{
        width: 1115px;
        height: 40px;
        background-color: #ccc;
        margin-top: 5px;
        margin-left: 404px;
        ul{
            display: flex;
            justify-content: space-between;
            background-color: #35383F;
            // align-items: center;
            li{
                width: 159px;
                line-height: 40px;
                text-align: center;
                color: #fff;
            }
        }
    }
</style>