<template>
	<div>
		 <el-breadcrumb separator="/" v-for="item,index in $route.meta" :key="index">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{item.title}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
		订单列表
	</div>
</template>
