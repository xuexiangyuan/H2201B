<template>
  <div class="about">
    <el-container>
      <el-aside :width="isCollapse==false?'200px':'60px'" class="Aside">
        <!-- 菜单 -->
        <el-menu
					:collapse="isCollapse"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#5888ff"
          text-color="#fff"
          active-text-color="#43A7FE"
					router
        >
				<img class="titleimg" src="@/assets/title.png" alt="">

          <el-menu-item index="homeview">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="staff">
            <i class="el-icon-user-solid"></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="install">
            <i class="el-icon-s-tools"></i>
            <span slot="title">设置</span>
          </el-menu-item>
          <el-menu-item index="manage">
            <i class="el-icon-news"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="security">
            <i class="el-icon-s-grid"></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="examine">
            <i class="el-icon-s-claim"></i>
            <span slot="title">审批</span>
          </el-menu-item>
          <el-menu-item index="check">
            <i class="el-icon-s-order"></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="salary">
            <i class="el-icon-wallet"></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="11">
            <i class="el-icon-film"></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
        </el-menu>
        <!-- 菜单 -->
      </el-aside>
      <el-container>
        <el-header class="Header">
					<div class="Headerson">
						<i class="el-icon-s-fold" @click="isCollapse=!isCollapse"></i>
						<p>江苏传智播客教育科技股份有限公司</p>
						<span>体验版</span>
					</div>
					<div class="Header-son">
						<img src="@/assets/猫.png" alt="">
						<p>彭于晏</p>
						<i class="el-icon-arrow-down"></i>
					</div>
				</el-header>
        <el-main>
					<router-view></router-view>
				</el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>

export default {

  data() {
    return {
			isCollapse: false
		}
  }
}
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-menu{
	height: 100%;
}
.el-header {
  background-color: #4879fa;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.el-icon-s-fold{
	font-size: 30px;
}
.titleimg{
	height: 60px;
}

	i{
		color: #fff;
	}

.Headerson{
	display: flex;
	justify-content: space-between;
	align-items: center;
	p{
		margin-left: 30px;
		color: #fff;
		font-size: 20px;
	}
	span{
		width: 60px;
		height: 30px;
		background-color: #84A9FE;
		color: #fff;
		border-radius: 10px;
		line-height: 30px;
		text-align: center;
		margin-left: 30px;
	}
}
.Header-son{
	display: flex;
	justify-content: space-between;
	align-items: center;
	img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	p{
		color: #fff;
		margin-left: 10px;
	}
}
</style>
