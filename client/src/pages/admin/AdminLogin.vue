<template>
  <div class="login-container" :style="{ height: height + 'px' }">
    <div class="login-content box-shadow flex">
      <p class="title">Welcome to the shopping system</p>
      <div class="left-banner"></div>
      <div class="login-option pl-26">
        <div class="transilate-page">
          <div
            class="front-page page"
            :style="{
              transform: signupTag ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }"
          >
            <el-tabs
              v-model="loginOptionType"
              class="option-tab"
              stretch
              @tab-click="onChangeTab"
            >
              <el-tab-pane label="LOGIN INFO">
                <el-form
                  :model="loginForm"
                  label-position="left"
                  label-width="70px"
                  class="login-form"
                >
                  <el-form-item label="Email:">
                    <el-input
                      v-model="loginForm.email"
                      :placeholder="'Email'"
                      clearable
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="Password:">
                    <el-input
                      type="password"
                      v-model="loginForm.pwd"
                      :placeholder="'pwd'"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div>
                  <!-- <el-button
                    @click="signupTag = true"
                    style="float:right"
                    type="text"
                    >Register now</el-button
                  > -->
                </div>
                <el-button
                  style="width:100%;padding:12px;"
                  @click="onLogin(1)"
                  type="primary"
                  >{{ "Login" }}</el-button
                >
                <el-divider>Other login Way</el-divider>
                <p style="color:#333;font-size:13px;text-align:center">
                  Functional development...
                </p>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import { isEmpty, getClientSize } from "@/utils";
import { login } from "../../api/admin";
import { setup as languageSetup } from "@/locales/admin";

export default {
  name: "AdminLogin",
  computed: {
    ...mapGetters(["language"]),
    height() {
      return getClientSize().height;
    }
  },
  data() {
    return {
      signupTag: false,
      loginOptionType: 0,
      loginForm: {
        email: "",
        pwd: ""
      },
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations({
      setAdminName: "SET_ADMIN_NAME",
      setAdminToken: "SET_ADMIN_TOKEN"
    }),
    onChangeLanguage() {
      languageSetup(this.language == "zh" ? "en" : "zh");
      this.$store.dispatch(
        "app/changeLanguage",
        this.language == "zh" ? "en" : "zh"
      );
    },
    onChangeTab() {},
    onLogin() {
      if (isEmpty(this.loginForm.email) || isEmpty(this.loginForm.pwd)) {
        this.$message.error(this.$t("message.info"));
        return;
      }
      const res = login({
        account: this.loginForm.email,
        pwd: this.loginForm.pwd
      });
      res
        .then(data => {
          this.setAdminName(data.name);
          this.setAdminToken(data.token);
          this.$router.push({ path: this.redirect || "/" });
        })
        .catch(e => {
          console.log(e);
          this.$message.error(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  // background: url("~@/assets/images/bg.jpg") no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;

  p.title {
    position: absolute;
    color: #8e8c8c;
    font-weight: bold;
    font-size: 24px;
    left: -5%;
    top: -15%;
  }
  .login-content {
    position: relative;
    border-radius: 6px;
    padding: 26px;
    height: 400px;
    min-height: 400px;
    background-color: #fffdff;
    .left-banner {
      height: 100%;
      width: 400px;
      background: url("~@/assets/images/login.jpg");
      background-size: 400px 100%;
    }
    .login-option {
      width: 320px;
      // border-left: 1px solid #EEE;
    }
    .transilate-page {
      height: 400px;
      position: relative;
      perspective: 1500;
      // -webkit-perspective: 1500;
      // -moz-perspective: 1500;
    }
    .page {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.4s;
      backface-visibility: hidden;
      cursor: pointer;
    }
    .front-page {
    }
    .back-page {
      transform: rotateY(-180deg);
    }
    .option-tab {
      /deep/ {
        .el-tabs__nav-wrap::after {
          content: none;
        }
        .el-tabs__nav {
          text-align: center;
          float: none;
        }
      }
    }
    .login-form {
      margin-top: 20px;
      .el-form-item {
        background-color: #eeebee;
        padding: 8px 10px;
        border-radius: 6px;
        margin-bottom: 15px;
        /deep/ {
          .el-form-item__label {
            font-size: 12px;
            color: #666;
          }
          .el-input__inner {
            border: none;
            background-color: transparent;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
