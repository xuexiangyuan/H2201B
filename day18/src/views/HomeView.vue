<template>
  <div class="home">
    <el-container>
  <el-aside :width="isCollapse==false?' 200px':'60px'">
		<!-- 菜单 -->

		<el-menu
      default-active="1"
			:collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#333744"
      text-color="#fff"
      active-text-color="#409EFF"
			router>
			<p class="p">电商后台管理系统</p>
      <el-submenu :index="item.path" v-for="item in menus" :key="item.id">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>{{item.authName}}</span>
        </template>
        <el-menu-item-group v-for="ele in item.children" :key="ele.id">
          <el-menu-item :index="'/'+ele.path" ><i class="el-icon-menu"></i> {{ele.authName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>



    </el-menu>
		<!-- 菜单 -->
	</el-aside>
  <el-container>
    <el-header >
			<i class="el-icon-s-fold" @click="isCollapse=!isCollapse"></i>
			<el-button type="info">退出</el-button>
		</el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
			isCollapse:false,
			menus:[],
			roles:[],
		}
  },
	created() {
		this.$http({ method: 'get', url: '/api/menus' }).then((res) => {
            console.log(res)
						this.menus=res.data.data
						this.roles=res.data.data[1]
          })
	},
}
</script>

<style lang="scss" scoped>
.home{
	height: 100%;
}
.title {
  font-size: 26px;
  display: flex;
  align-items: center;
}
 i{
    cursor: pointer;
  }
.name{
	// display: flex;
	width: 200px;
	background-color: #333744;
	color: #fff;
}
.p{
	white-space:nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: center;
	font-size: 22px;
	height: 50px;
	line-height: 50px;
}
</style>
