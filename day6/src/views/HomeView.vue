<template>
  <div class="home">
    <el-container>
      <el-aside width="230px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#BFCBD9"
          active-text-color="#20A0FF"
          router
        >
        <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="yhlb">用户列表</el-menu-item>
              <el-menu-item index="sjlb">商家列表</el-menu-item>
              <el-menu-item index="splb">食品列表</el-menu-item>
              <el-menu-item index="ddlb">订单列表</el-menu-item>
              <el-menu-item index="glylb">管理员列表</el-menu-item>
            </el-menu-item-group>
            
            
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="tjdp">添加商铺</el-menu-item>
              <el-menu-item index="tjsp">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="yhfbt">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="wbbjj">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="glyszz">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="sm">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
          
          
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <p>首页</p>
          </div>
          <div>
            <img class="tx" src="@/assets/1.png" alt="" />
          </div>
        </el-header>
        <el-main><router-view></router-view></el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tx {
  width: 50px;
  height: 40px;
}
.home{
  height: 100%;
}
</style>