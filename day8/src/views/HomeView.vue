<template>
  <div class="home">
    <!-- 模板字符串  插值表达式也叫模板字符串 -->
      <h1>{{msg}}</h1>
      
      <p v-bind:title="message">鼠标悬停</p>
      <p :title="message">鼠标悬停</p>
      

      <p v-if="flag">假如再碰不见你，祝你早、午、晚都安。——《楚门的世界》</p>
      <p v-else>如果你不出去走走，就会以为眼前的这些就是全世界。——《天堂电影院》</p>
      <p v-if="flagshow">我滑倒了，面条。——《美国往事》</p>
      <button v-on:click="qufan">字段取反</button>

      <br>
      <p v-show="flagshow">曾经有一份真诚的爱情摆在我面前。——《大话西游之大圣娶亲》</p>


      <br/>
      <ul>
        <li v-for="item,index in list " :key="index">{{item.name}}</li>
      </ul>
      <button @click="render">修改下标0的内容</button>


      <br/>

      <input type="text" @change="change" v-model="input">
      {{input}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'我要睡觉',
      message:'鼠标悬停几秒瞅瞅什么时候加载的'+new Date().toLocaleString(),
      flag:true,
      flagshow:true,
      list:[
        {
          id:1,
          name:'孩子们，及时行乐，把握今天。——《死亡诗社》'
        },
        {
          id:2,
          name:'我爬得越高，眼前的风景便愈发迷人。——《怦然心动》'
        },
        {
          id:3,
          name:'毕竟，明天又是新的一天。——《乱世佳人》'
        },
        {
          id:4,
          name:' 生活就像一盒巧克力，你永远不知道你会得到什么。——《阿甘正传》'
        },
        {
          id:5,
          name:'上天没有给你想要的，不是因为你不配，而是你值得拥有更好的。——《乱世佳人》'
        },
      ],
      input:'',
    }
  },
  methods: {
    qufan(){
      this.flag=!this.flag
      this.flagshow=!this.flagshow
    },
    render(){
      this.list[0].name ='嘻嘻嘻'
    },
    change(e){
      console.log(e.target.value);
      this.input=e.target.value
      // console.log(this.input);
    }
  },
}
</script>

<style lang="scss" scoped>
  li{
    list-style: none;
    margin-top: 10px;
    background-color: #ccc;
  }
</style>