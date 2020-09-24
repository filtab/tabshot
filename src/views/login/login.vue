<template>
  <div class="my-login">
    <el-form :model="loginForm" :rules="rules2" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入账号" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" :loading="logining" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          // { validator: validaePass }
          // { validator: checkPhone, trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { validator: validaePass2 }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$router.push('/tabshot')
    }
  }
}
</script>

<style>
.my-login{
  /* margin-top: 40px; */
  position: absolute;
  height: 500px;
  width: 600px;
  margin: 0 auto;
  margin-top:100px;
  margin-left: 370px;
  border-radius: 10px;
  background-color: #bfd9fe;
}
 .login-container {
     z-index: 99999;
    position: absolute;
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    /* margin: 180px auto; */
    /* top: 200px; */
    margin-top: 100px;
    margin-left: 125px;
    width: 350px;
    padding: 35px 35px 15px 35px;
    /* background: #fff; */
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #1f1d1d;
 }
 .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
 }
</style>
