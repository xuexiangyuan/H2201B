<template>
  <div class="home">
    <!-- 表单 -->
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表单 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
// const formSize = ref('default')
import type { FormInstance, FormRules } from 'element-plus'
import * as ts from './common/api/api'
export default defineComponent({
  setup() {
    const ruleForm: ts.Login = reactive({
      username: '',
      password: ''
    })

    const ruleFormRef = ref<FormInstance>()
    const rules = reactive<FormRules>({
      username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
        { min: 2, max: 5, message: '请输入正确用户名', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '密码名不能为空', trigger: 'blur' },
        { min: 3, max: 10, message: '请输入正确密码', trigger: 'blur' }
      ]
    })

    const router = useRouter()
    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
          router.push('./AboutView')
        } else {
          console.log('error submit!', fields)
        }
      })
    }

    return {
      ruleForm,
      submitForm,
      rules,
      ruleFormRef,
      router
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-ruleForm {
  width: 500px;
  height: 260px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}
.el-form-item--feedback {
  margin-top: 40px;
  margin-left: -20px;
}
.el-input {
  width: 360px !important;
}
</style>
