<template>
  
  <div class="login-container" :style="{ height: height + 'px' }">
    <div class="login-content box-shadow flex">
      <p class="title">Welcome to the Shopp system</p>
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
                  <el-button
                    @click="signupTag = true"
                    style="float:right"
                    type="text"
                    >Register now</el-button
                  >
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
          <div
            class="back-page page"
            :style="{
              transform: signupTag ? 'rotateY(0deg)' : 'rotateY(-180deg)'
            }"
          >
            <el-button
              type="text"
              icon="el-icon-arrow-left"
              @click="signupTag = false"
              >Back</el-button
            >
            <div>
              <el-form
                :model="signupForm"
                label-position="left"
                label-width="70px"
                class="login-form signup-form"
                style="margin-top:0"
              >
                <el-form-item label="Email:">
                  <el-input
                    v-model="signupForm.email"
                    :placeholder="'email'"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="Nickname:">
                  <el-input
                    v-model="signupForm.name"
                    :placeholder="'nickname'"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="Password:">
                  <el-input
                    type="password"
                    v-model="signupForm.pwd"
                    :placeholder="'pwd'"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="Pwdagain:">
                  <el-input
                    type="password"
                    v-model="signupForm.pwdagain"
                    :placeholder="'password again'"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="Recipient:">
                  <el-input
                    v-model="signupForm.recipient"
                    :placeholder="'recipient'"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="Addres:">
                  <el-input
                    v-model="signupForm.address"
                    :placeholder="'address'"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="Phone:">
                  <el-input
                    type="number"
                    v-model="signupForm.phone"
                    :placeholder="'phone'"
                    clearable
                  ></el-input>
                </el-form-item>
              </el-form>
              <div style="text-align:center">
                <el-button
                  style="width:100%;padding:12px;"
                  type="primary"
                  @click="onSignup"
                  >Register</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getClientSize } from "@/utils";
import { login, signup } from "@/api/client";
import { isEmpty } from "@/utils";
import { validateEmail, validatePhone } from "@/utils/validate";

export default {
  name: "ClientLogin",
  computed: {
    width() {
      return getClientSize().width;
    },
    height() {
      return getClientSize().height;
    }
  },
  data() {
    return {
      curIndex: 0,
      loginOptionType: 0,
      signupTag: false,
      loginForm: {
        account: "",
        pwd: ""
      },
      signupForm: {
        email: "",
        name: "",
        pwd: "",
        pwdagain: "",
        recipient: "",
        address: "",
        phone: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      setClientName: "SET_CLIENT_NAME",
      setClientToken: "SET_CLIENT_TOKEN"
    }),
    setIndex(index) {
      if (index === this.curIndex) {
        return;
      }
      this.curIndex = index;
    },
    onLogin() {
      const email = this.loginForm.email;
      const pwd = this.loginForm.pwd;
      if (isEmpty(email) || isEmpty(pwd)) {
        this.$message.warning("Please complete the information");
        return;
      }
      const res = login({
        account: email,
        pwd: pwd
      });
      res
        .then(data => {
          this.setClientName(data.name);
          this.setClientToken(data.token);
          this.$router.push("/");
        })
        .catch(e => {
          this.$message.error(e);
        });
    },
    onSignup() {
      if (
        isEmpty(this.signupForm.email) ||
        isEmpty(this.signupForm.name) ||
        isEmpty(this.signupForm.pwd) ||
        isEmpty(this.signupForm.pwdagain) ||
        isEmpty(this.signupForm.recipient) ||
        isEmpty(this.signupForm.address) ||
        isEmpty(this.signupForm.phone)
      ) {
        this.$message.warning("Please enter content in the input field");
        return;
      }

      if (!validateEmail(this.signupForm.email)) {
        this.$message.warning("Please enter the correct email address");
        return;
      }

      if (!validatePhone(this.signupForm.phone)) {
        this.$message.warning("Please enter the correct phone number");
        return;
      }

      if (this.signupForm.pwd !== this.signupForm.pwdagain) {
        this.$message.warning("The passwords do not match");
        return;
      }

      const res = signup({
        email: this.signupForm.email,
        nickname: this.signupForm.name,
        pwd: this.signupForm.pwd,
        recipient: this.signupForm.recipient,
        address: this.signupForm.address,
        phone: this.signupForm.phone
      });
      res
        .then(data => {
          this.setClientName(data.name);
          this.setClientToken(data.token);
          this.$router.push("/");
        })
        .catch(e => {
          this.$message.error(e);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.login-container {
  background-color: #f5f7fc;
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
    .back-page {
      top: -15px;
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
    .signup-form {
      margin-top: 10px;
      .el-form-item {
        background-color: #eeebee;
        padding: 4px 10px;
        border-radius: 6px;
        margin-bottom: 8px;
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
