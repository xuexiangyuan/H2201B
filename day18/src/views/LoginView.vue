<template>
  <div class="title">
		 <el-form class="form" ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user-solid" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="img">
      <img src="../assets/logo.82b9c7a5.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$http({ method: 'post', data: this.ruleForm, url: '/api/login' }).then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.data.token)
						this.$router.push('/home')
						 this.$message({
          message: '恭喜你，登录成功！',
          type: 'success'
        });
          })
        } else {
          this.$message({
            type: 'error',
            message: '登录失败'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
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

.form{
    background-color: #fff;
    width: 420px;
    padding: 90px 30px 10px 30px;
		margin-top: 0px;
    border-radius: 5px;
		box-shadow: 0px 0px 10px 0px #ccc;
  }

</style>
