<template>
	<div>
		<!-- 父传子 -->
		<p>父传子=============</p>
		<user1 v-bind:users="users"></user1>
		<p>父传子=============</p>
		<!-- 父传子 -->

		<!-- 子传父 -->
		<p>子串父=============</p>
		<user2 v-on:titlechanged="updateTitle"></user2>
		<h2>{{ title }}</h2>
		<p>子串父=============</p>
		<!-- 子传父 -->

		<!-- $emit -->
		<p>$emit传值===========</p>
		<span>{{name}}</span>
    <mya v-on:emit="emit"></mya>
		<p>$emit传值===========</p>
		<!-- $emit -->


    <p>vuex=============</p>
      <h3>{{$store.state.name}}</h3>
      <vuex></vuex>
    <p>vuex=============</p>


    <p>本地存储=============</p>
    <p>{{age}}</p>
    <button @click="cc">传值</button>
    <p>{{childs}}</p>
    <p>本地存储=============</p>


    <p>ref=============</p>
    <button @click="cz">向子组件传值</button>
    <ref ref="ref"></ref>
    <p>ref=============</p>

    
    <p>provide=============</p>
    <box></box>
    {{msgg}}
    <p>provide=============</p>


    <p>model=============</p>
    <myc v-model="test"></myc>
    <button @click="fn">v-model11</button>
    <p>model=============</p>
	</div>
</template>

<script>


	import user1 from '../components/user1.vue';
	import user2 from '../components/user2.vue';
	import mya from '../components/mya.vue';
	import myb from '../components/myb.vue';
	import myc from '../components/myc.vue';
	import vuex from '../components/vuex.vue';
	import ref from '../components/ref.vue';
	import box from '../components/box.vue';
	export default {
		data() {
			return {
				users: ['张三', '张三1', '张三2'],
				title: '传递一个值',
        age:18,
        childs:'',
        name:'',
         msgg:'爷爷组件数据',
         test:'',
			};
		},
    provide:function(){
    return {
    msgg:this.msgg
  }
  },
		methods: {
			updateTitle(e) {
				this.title = e;
			},
      cc(){
        localStorage.setItem('cc',this.age)
        console.log(localStorage.getItem('cc'));
        
      },
      cz(){
        this.$refs.ref.cInfo="c2"
      },
      emit:function(val){
        this.name=val
      },
      fn(){
        this.test+=1
      }
      
		},
		components: {
			user1,
			user2,
			mya,
			myb,
			myc,
      vuex,
      ref,
      box,
		},
	};
</script>
