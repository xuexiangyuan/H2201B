<template>
  <div class="home">
    <div class="login">
      <h1>iHRM后台登录系统</h1>
      <!-- 登录 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item  prop="username">
          <el-input v-model="ruleForm.username">
						<i slot="prefix" class="el-icon-user-solid"></i>
					</el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input v-model="ruleForm.password" type="password">
						<i slot="prefix" class="el-icon-lock"></i>
					</el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>

        </el-form-item>
      </el-form>
      <!-- 登录 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			ruleForm:{
				username:'',
				password:'',
			},
			rules: {
        username: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }

		}
  },
	methods: {
		 submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
						// this.$http({method:'post',data:this.ruleForm,url: '/api/login'}).then(res=>{
						// 	console.log(res);
						// })
						this.$router.push('/about')
						this.$notify({
          title: '登录成功',
          message: '恭喜登录成功',
          type: 'success'
        });
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

	},
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  background: url('@/assets/login.jpg');
  background-position-x: 100%;
  background-position-y: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  h1 {
    font-size: 40px;
    color: #fff;
    font-weight: normal;
  }
}

.demo-ruleForm{
	margin-top: 30px;
}

.el-input--prefix{
	width: 360px;
	margin-left: -100px;
}

.btn{
	width: 360px;
	margin-left: -100px;
	background-color: #407FFE;
	height: 50px;
}
</style>
