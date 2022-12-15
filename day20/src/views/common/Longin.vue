<template>
	<div class="title">
		<!-- <el-form class="form">
			<el-form-item>
				<el-input v-model="form.username" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="form.password" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="dl">登录</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form> -->
		<el-form class="form">
			<el-form-item prop="username">
				<el-input prefix-icon="el-icon-user-solid" v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" prefix-icon="el-icon-lock" v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="dl">登录</el-button>
				<el-button type="info">重置</el-button>
			</el-form-item>
		</el-form>
		<div class="img">
			<img src="@/assets/太空人.jpeg" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			form: {
				username: "",
				password: ""
			}
		}
	},
	methods: {
		dl () {
			if (this.form.username == "admin" && this.form.password == "123456") {
				this.$http.send("/login", this.form, "post").then(res => {
					console.log(res);
					if (res.data.meta.status == 200) {
						this.$router.push("/")
					}
				})
			} else {
				this.$message.error('密码或用户名错误');
			}

		}
	},
	created () { },
	mounted () { },
	components: {},
	computed: {},
	watch: {}
}
</script>

<style lang="scss" scoped>
.title {
	height: 100%;
	background-color: #2b4b6b;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(@/assets/背景.jpg);
}

.img {
	width: 130px;
	height: 130px;
	background-color: #fff;
	position: fixed;
	top: 140px;
	border-radius: 50%;
	box-shadow: 0px 0px 10px 0px #ccc;
	padding: 10px;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #efefef;
	}
}

.form {
	background-color: #fff;
	width: 420px;
	padding: 90px 30px 10px 30px;
	margin-top: 0px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px 0px #ccc;
}
</style>
