<template>
	<div>
		<div>我是子组件</div>
		<p>{{ msg }}</p>
		<button @click="hadlehover">触摸父组件</button><br/>

        姓：<input v-model="firstName"/>
        名：<input v-model="lastName"/>
        <p>全名：{{fullName}}</p><br/>

            {{sum}}
        <button @click="sum++">sum加加</button>
	</div>
</template>

<script>
import {computed,ref,reactive,watch, watchEffect,toRefs} from 'vue'
	export default {
		// props: ['msg'],
        // emits:['change'],
		// setup(props, {emit}) {
        //     const firstName=ref('庆余年')
        //     const lastName=ref('雪中悍刀行')
		// 	console.log(props);
		// 	// console.log(context);
		// 	function hadlehover() {
		// 		emit('change', '我要摸一下父组件');
		// 	}

        //     //计算属性
        //     let fullName= computed({
        //         get(){
        //             return firstName.value+lastName.value
        //         },
        //         // set(){}
        //     })

        //     //监听
        //     const sum =ref(20)
        //     const sum1 =ref(19)
        //     const sum2 =ref(18)
        //     watch(
        //         [sum,firstName,lastName],
        //         (newValue,oldValue)=>{
        //             console.log('sum变化了',newValue,oldValue);
        //         },
        //         {immediate:true}  //立即监听
        //     )
        //     //watchEffect函数
        //     watchEffect(()=>{
        //         const x1 =sum.value
        //         const x2 =firstName.value
        //         console.log('watchEffect配置的回调执行了');
        //     })

        // props: ['msg'],
        // emits:['change'],
		// setup(props, {emit}) {
        //     const firstName=ref('庆余年')
        //     const lastName=ref('雪中悍刀行')
		// 	console.log(props);
		// 	function hadlehover() {
		// 		emit('change', '我要摸一下父组件');
		// 	}
        //     let fullName= computed({
        //         get(){
        //             return firstName.value+lastName.value
        //         },
        //     })

        //     const sum =ref(20)
        //     const sum1 =ref(19)
        //     const sum2 =ref(18)
        //     watch(
        //         [sum,firstName,lastName],
        //         (newValue,oldValue)=>{
        //             console.log('sum变化了',newValue,oldValue);
        //         },
        //         {immediate:true} 
        //     )

        //     watchEffect(()=>{
        //         const x1 =sum.value
        //         const x2 =firstName.value
        //         console.log('watchEffect配置的回调执行了');
        //     })

        props: ['msg'],
        emits:['change'],
		setup(props, {emit}) {
            const firstName=ref('庆余年')
            const lastName=ref('雪中悍刀行')
			console.log(props);
			function hadlehover() {
				emit('change', '我要摸一下父组件');
			}
            let fullName= computed({
                get(){
                    return firstName.value+lastName.value
                },
            })

            const sum =ref(20)
            const sum1 =ref(19)
            const sum2 =ref(18)
            watch(
                [sum,firstName,lastName],
                (newValue,oldValue)=>{
                    console.log('sum变化了',newValue,oldValue);
                },
                {immediate:true} 
            )

            watchEffect(()=>{
                const x1 =sum.value
                const x2 =firstName.value
                console.log('watchEffect配置的回调执行了');
            })

			return {
				hadlehover,
                firstName,
                lastName,
                fullName,
                sum,
                sum1,
                sum2,
                
			};
		},

        
	};
</script>

<style lang="scss" scoped></style>
