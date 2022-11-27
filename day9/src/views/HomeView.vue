<template>
  <div class="home">
    <div class="box">
        <header>
            <div class="title">
                <img class="img" src="@/assets/note.75134fb0.svg">
                <div class="to">To-Do List</div>
            </div>
            <div class="next">
                <h5>~ Today l need to ~</h5>
                <div class="inp">
                    <input class="input" type="text" v-model="input" @keydown.13="cheng" placeholder="Add new todo...">
                    <button class="btn"><span class="span">submit</span></button>
                </div>

                <div class="paragraph" v-show="db">
                    <div class="tb"><img class="hd" src="@/assets/核对.png" alt=""></div>
                    <h5 class="wz">Congrat,you have no more tasks to do</h5>
                </div>
            </div>

            <!-- 添加的li -->
            <ul class="ul">
                <li :class="item.state==true?'active':''"  v-show="status" v-for="item,index in list" :key="index" >
                  <input type="checkbox" v-model="item.state" @change="changee">
                  <p :class="item.state==true?'catived':''">{{item.val}}</p>
                  <p @click="del(index)">X</p>
                </li>
            </ul>
            <!-- 添加的li -->

            <!-- 添加后出现的按钮 -->
            <div class="nav" v-show="nav">
                <div class="navv">
                    <span><span class="num">{{list.length}}</span> item left</span>
                    <p class="all">All</p>
                    <p class="all1" v-show="nav1">Active</p>
                    <p class="all2" v-show="nav1">Completed</p>
                    <p class="all3" v-show="nav1">Clear completed</p>
                </div>
            </div>
            <!-- 添加后出现的按钮 -->
        </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:'',  //input 绑定
      list:[],  //li 循环的数组
      status:false,  //  li隐藏的状态 
      checked:false,  //复选框的状态

      db:true,  // 底部文字隐藏
      nav:false,  // 底部按钮隐藏
      nav1:false,  // 底部按钮隐藏
    }
  },
  methods: {
    cheng(e){
      // console.log(1);
      console.log(e.target.value);
      if(e.target.value==''){
        alert('内容不能为空')
        return false
      }
      else{
        this.list.push(
          {
            val:e.target.value,
            state:false
          }
        )
        console.log(this.list);
        this.status=true
        this.db=false
        this.nav=true
        this.input=''
      }
    },
    del(index){
      if(this.list.length==0){
        this.db=true
        this.nav=false
      }
      // this.list.forEach(item=> item.index==1)
      // console.log(index);
      console.log(index);
      this.list.splice(index, 1)
    },
    changee(e){
      console.log(e);
      this.nav1=!this.nav1
    }
  },
}
</script>


<style lang="scss" scoped>
.active{
  background-color:#FE7345;
  color: #fff;
  // text-decoration: line-through;
  transform: rotateX(360deg);
  border-radius: 10px;
}
.catived{
  text-decoration: line-through;
}
.ul{
  li{
  width: 360px;
  height: 50px;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  transition: all 1s;
}
// .lihover{
//   transform: rotateX(360deg);
// }
}
.home{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

//  .all1{
//         display: none;
//     }
//     .all2{
//         display: none;
//     }
//     .all3{
//         display: none;
//     }
    .nav{
        width: 100%;
        padding: 10px 20px;
        // display: none;
    }
    .navv{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .all{
        width: 40px;
        height: 30px;
        background-color: #FE7345;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 6px;
        margin-bottom: 10px;
        gap: 20px
    }
    .content{
        width: 430px;
        height: 50px;
        /* background-color: pink; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .del{
        width: 50px;
        height: 50px;
        /* background-color: lightblue; */
        text-align: center;
        line-height: 50px;
    }
    .ul{
      width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    // html {
    //     height: 100%;
    //     /*宽度*/
    // }

    // body {
    //     display: flex;
    //     /*弹性盒子*/
    //     align-items: center;
    //     /*居中*/
    //     justify-content: center;
    //     /*居中*/
    //     height: 100%;
    //     /*高度*/
    //     background: repeating-linear-gradient(to right, #ffafbd, #ffc3a0)
    //         /* 从左到右渐变色 */
    // }

    .box {
        width: 500px;
        /*宽度*/
        background-color: #F2F2F2;
        /*背景颜色*/
        /* height: 300px; */
        /*高度*/
        border-radius: 20px;
        /*圆角边框*/
    }

    header {
        width: 100%;
        margin-top: 10px;
        /*据顶端下移10px*/
        display: flex;
        /*让他弹性盒子*/
        justify-content: center;
        /*居中*/
        /* height: 88px;    高度*/
        align-items: center;
        /*高度*/
        flex-wrap: wrap;
    }

    .to {
        width: 100px;
        /*宽度*/
        height: 40px;
        /*高度*/
        background-color: #FE7345;
        /*背景颜色*/
        transform: rotate(3deg);
        /*盒子倾斜*/
        color: #fff;
        /*字体颜色*/
        text-align: center;
        /*字体居中*/
        line-height: 40px;
        /*字体居中*/
        border-top-left-radius: 10%;
        /*右上角边框*/
        border-top-right-radius: 10%;
        /*左上角边框*/
        border-bottom-right-radius: 25%;
        /*左上角边框*/
        border-bottom-left-radius: 10%;
        /*左下角边框*/
    }

    .img {
        width: 80px;
        /*宽度*/
        height: 80px;
        /*高度*/
    }

    .title {
        display: flex;
        /*让他弹性盒子*/
        justify-content: center;
        /*居中*/
        height: 88px;
        /*高度*/
        align-items: center;
        /*高度*/
        flex: 1;
    }

    .next {
        width: 100%;
        /* margin-top: 20px; */
        display: flex;
        /*让他弹性盒子*/
        justify-content: center;
        /*居中*/
        /* height: 88px; */
        /*高度*/
        align-items: center;
        /*高度*/
        font-size: 20px;
        flex-wrap: wrap;
    }

    .inp {
        width: 100%;
        display: flex;
        /*让他弹性盒子*/
        justify-content: center;
        /*居中*/
        height: 88px;
        /*高度*/
        align-items: center;
        /*高度*/
        font-size: 20px;
        flex-wrap: wrap;
    }

    .input {
        width: 235px;
        height: 30px;
        border: 0;
        color: #B3B3B3;
        border-bottom: 3px dashed #fe7345;
        background-color: #F2F2F2;
        margin-right: 10px;
        outline-style: none;
    }

    .btn {
         width: 70px;
        /*height: 35px;
        transform: rotate(3deg); 
        border-radius: 10px; */
        position: relative;
        transform: rotate(4deg);
        border-radius: 5px;
        /* transition: transform .25s */
    }

    .btn::before {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 100%;
        transform: scaleY(1.1);
        /* border: 1px solid #494a4b; */
        border-radius: inherit;
        transform-origin: top;
        background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
        background-color: #fe7345;
        /* transition: transform .25s */
    }
    .span {
        position: relative;
        display: block;
        font-size: 16.5px;
        padding: 5px  5px;
        /* border: 1px solid #494a4b; */
        border-radius: inherit;
        background-color: #fff;
    }
    .paragraph{
        width: 100%;
        display: flex;
        /*让他弹性盒子*/
        justify-content: center;
        /*居中*/
        height: 88px;
        /*高度*/
        align-items: center;
        /*高度*/
        font-size: 20px;
        flex-wrap: wrap;
        margin-top: -20px;
        
    }
    .tb{
        width: 15px;
        height: 15px;
        margin-top: -10px;
        margin-right: 10px;
    }
    .hd{
        width: 100%;
        height: 100%;
    }
    .wz{
        font-size: 12px;
        color: #B7B8B8;
    }
</style>