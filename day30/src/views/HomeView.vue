<template>
    <div class='home'>
          <ul>
            <li v-for="item,index in list" :key="index">{{item.name}}</li>
          </ul>
          <div class="btn">
            <button @click="one">单人点名</button>
            <button @click="tow">双人点名</button>
            <button @click="nam">男生点名</button>
            <button @click="nv">女生点名</button>
          </div>
          <div class="name">
              <h1>幸运星</h1>
              <h1>{{textname}}</h1>
          </div>
          
    </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  setup(props, ctx) {
    const data = reactive({
      list: [
        {
          id:1,
          name: "佐菲·奥特曼",
          six: 1,
        },
        {
          id:2,
          name: "初代·奥特曼",
          six: 0,
        },
        {
          id:3,
          name: "赛文·奥特曼",
          six: 1,
        },
        {
          id:4,
          name: "杰克·奥特曼",
          six: 0,
        },
        {
          id:5,
          name: "艾斯·奥特曼",
          six: 0,
        },
        {
          id:6,
          name: "泰罗·奥特曼",
          six: 0,
        },
        {
          id:7,
          name: "奥特之父",
          six: 0,
        },
        {
          id:8,
          name: "奥特之母",
          six: 0,
        },
        {
          id:9,
          name: "雷欧·奥特曼",
          six: 0,
        },
        {
          id:10,
          name: "阿斯特拉·奥特曼",
          six: 0,
        },
        {
          id:11,
          name: "奥特之王",
          six: 0,
        },
        {
          id:12,
          name: "乔尼亚斯·奥特曼",
          six: 0,
        },
        {
          id:13,
          name: "爱迪·奥特曼",
          six: 0,
        },
        {
          id:14,
          name: "史考特·奥特曼",
          six: 1,
        },
        {
          id:15,
          name: "查克·奥特曼",
          six: 1,
        },
        {
          id:16,
          name: "贝斯·奥特曼",
          six: 0,
        },
        {
          id:17,
          name: "葛雷·奥特曼",
          six: 1,
        },
        {
          id:18,
          name: "帕瓦特·奥特曼",
          six: 0,
        },
        {
          id:19,
          name: "哉阿斯·奥特曼",
          six: 1,
        },
        {
          id:20,
          name: "迪迦·奥特曼",
          six: 1,
        },
      ],
      textname: "",
      time: null,
      num: 0,
    });
    const one = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          var nums = Math.floor(Math.random() * data.list.length);
          data.num++;
          data.textname = data.list[nums].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.textname = data.list[nums].name;
            data.list.splice(nums, 1);
          }
        }, 100);
      }
    };
    const tow = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * data.list.length);
          var num2 = Math.floor(Math.random() * data.list.length);
          data.num++;
          data.textname = data.list[num1].name + "," + data.list[num2].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.textname = data.list[num1].name + "," + data.list[num2].name;
            data.list.splice(num1, 1);
            data.list.splice(num2, 1);
          }
        }, 100);
      }
    };
    const nam = () => {
      var arr1 = [];
      if (arr1.length == 0) {
        data.list.forEach((i) => {
          if (i.six == 0) {
            arr1.push(i);
          }
        });
      }
      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * arr1.length);
          data.num++;
          data.textname = arr1[num1].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.textname = arr1[num1].name;
            arr1.splice(num1, 1);
          }
        }, 100);
      }
    };
    const nv = () => {
      var arr1 = [];
      if (arr1.length == 0) {
        data.list.forEach((i) => {
          if (i.six == 1) {
            arr1.push(i);
          }
        });
      }

      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * arr1.length);
          data.num++;
          data.textname = arr1[num1].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.textname = arr1[num1].name;
            arr1.splice(num1, 1);
          }
        }, 100);
      }
    };
    return { ...toRefs(data), one, tow, nam, nv };
  },
};
</script>

<style lang='scss' scoped>
.home{
  width: 100%;
  height: 100%;
  background: url('../img/xxxx.gif');
}
.name{
  color: #fff;
}
ul {
  width: 700px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  bottom: 100px;
  li {
    list-style: none;
    flex: 25%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
}
.btn{
  width: 500px;
  height: 100px;
  // background-color: pink;
  position: fixed;
  bottom: 200px;
  right: 200px;
  button {
  width: 100px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background: #FF9D32;
  color: #fff;
  line-height: 30px;
  margin-left: 20px;
}
}

</style>

