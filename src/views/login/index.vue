<template>
  <div class="container">
    <el-card>
      <img src="../../assets/logo_index.png" width="200px" alt />
      <el-form ref="loginForm" status-icon :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" status-icon placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            style="width:235px;margin-right:10px"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkMobile = (rule, value, callBack) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callBack()
      } else {
        callBack(new Error('请输入正确的手机号'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          // 发请求 校验手机号和验证码  后台
          this.$http
            .post('authorizations', this.loginForm)
            .then(res => {
              // 成功
              this.$router.push('/')
            })
            .catch(() => {
              // 失败 提示
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>
<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
.el-card {
  width: 400px;
  height: 340px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    display: block;
    margin: 0 auto 30px;
  }
}
</style>
