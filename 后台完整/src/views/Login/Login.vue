<template>
  <div class="home">
    <div class="login">
      <h1>iHRM后台登录系统</h1>
      <!-- 登录 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile">
            <i slot="prefix" class="el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password">
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- 登录 -->
    </div>
  </div>
</template>

<script>
import { login } from '../api/login'
import {setToken} from '../../untils/auth'
import { STATUS } from '../../untils/Status'
export default {
  data() {
    return {
      ruleForm: {
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
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
          login(this.ruleForm).then((res) => {
            // console.log(res)
						if(res.status==STATUS.SUCCESS){
							// sessionStorage.setItem('token',res.data.data)
							setToken(res.data.data)
							// console.log();
							// console.log(res.data.data);
							this.$router.push('/about')
          this.$notify({
            title: '登录成功',
            message: '欢迎光临',
            type: 'success'
          })
						}
          })
          // this.$http({method:'post',data:this.ruleForm,URL: '/api/sys/login'}).then(res=>{
          // 	console.log(res);
          // })

          // alert('submit!');
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
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

.demo-ruleForm {
  margin-top: 30px;
}

.el-input--prefix {
  width: 360px;
  margin-left: -100px;
}

.btn {
  width: 360px;
  margin-left: -100px;
  background-color: #407ffe;
  height: 50px;
}
</style>
