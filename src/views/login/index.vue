<template>
  <el-form ref="form" :model="form" :rules="rules" class="login-container">
    <h2 class="title">用户登录</h2>
    <!-- <i class="el-icon-user-solid"></i> -->
    <el-form-item prop="name">
      <el-input v-model="form.name" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
    <el-form-item>
      <el-button
        type="primary"
        class="login-button"
        :loading="loading"
        @click.native.default="handleSubmit"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import tools from "@/utils/tools";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
      } else {
        if (!tools.passwordRegx(value)) {
          callback(new Error("密码至少为6位数字字母组合"));
        }
        callback();
      }
    };
    return {
      form: {
        name: "admin",
        password: "admin123"
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      checked: true,
      loading: false
    };
  },
  methods: {
    handleSubmit() {
      let _this = this;
      this.$refs.form.validate(valida => {
        if (valida) {
          this.loading = true;
          let formInfo = Object.assign({}, this.form);
          this.$api.login.handleLogin(formInfo).then(data => {
            _this.loading = false;
            console.log(data);
            sessionStorage.setItem("user", JSON.stringify(data.user));
            _this.$router.push({ path: "/" });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 250px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 20px 0px;
    float: left;
  }
  .login-button {
    width: 100%;
  }
}
</style>
