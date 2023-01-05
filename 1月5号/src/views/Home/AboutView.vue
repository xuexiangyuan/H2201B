<template>
<div class='home'>
    <el-container>
      <el-aside width="200px">
        <img src="@/assets/title.png" alt="">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        text-color="#fff"
        active-color="#d00"
        router
      >
        <el-menu-item index="/userindex">
          <el-icon><Location/></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon><Printer/></el-icon>
          <span>组织架构</span>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <span>公司设置</span>
        </el-menu-item>
        <el-menu-item index="/permiss">
          <el-icon><setting /></el-icon>
          <span>权限设置</span>
        </el-menu-item>

        <el-menu-item index="7">
          <el-icon><Collection /></el-icon>
          <span>考勤</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><FirstAidKit /></el-icon>
          <span>工资</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><CircleCheck /></el-icon>
          <span>审批</span>
        </el-menu-item>
      </el-menu>
      </el-aside>
      <el-container>
        <el-header>
            <div class="left">
              <el-icon><Operation /></el-icon>
              <span>江苏传智播客教育科技股份有限公司</span>
              <button class="btBox">体验版</button>
            </div>
            <div class="fight">
                <ul>
                  <li><el-icon :size="35"><Search /></el-icon></li>
                  <li><el-icon  :size="35"><QuestionFilled /></el-icon></li>
                  <li><el-icon :size="35"><Rank /></el-icon></li>
                </ul>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</div>
</template>

<script lang="ts" setup>
import { Location,Printer,User,Setting,Operation,Rank,Menu,Collection,FirstAidKit,CircleCheck,Search,QuestionFilled } from '@element-plus/icons-vue'
import { ref, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
 import { useRouter, useRoute } from 'vue-router';

const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
</script>

<style lang='scss'>
.el-aside{
    background-color: #5889FE;
    height: 100vh;
    color: #fff;
    .el-menu{
        background-color: #5889FE;
    }
}
.el-header{
    background-color: #4C7CFB;
    // background-color: #d00;
    line-height: 60px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    .left{
      width: 50%;
      height: 100%;
      // background-color: pink;
    }
    .fight{
      width: 10%;
      height: 100%;
      // background-color: palegreen;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          width: 40px;
          height: 40px;
          // background-color: khaki;
          margin-top: 10px;

        }
      }
    }
    .btBox{
        width: 60px;
        height: 30px;
        margin-left: 20px;
        border-radius: 10px;
        border: 1px solid #84A9FE;
        background-color: #84A9FE;
        color: #fff;
    }
    span{
        margin-left: 20px;
        font-size: 22px;
    }
}
</style>
