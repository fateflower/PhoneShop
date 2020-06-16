<template>
  <div class="login">
    <h1>登录页</h1>
    <img class="logo" src="../assets/logo.png" />
    <input placeholder="请输入用户名" class="ipt" v-model="tVal" />
    <input placeholder="请输入密码" class="ipt" type="password" v-model="pVal" />
    <button class="btn" @click="login">登录</button>
    <router-link
      class="reg"
      :to="{
			name:'Reg',
			query:{
				comName:this.comName
			}
		}"
    >没有账号，去注册</router-link>
  </div>
</template>

<script>
import { post } from "../utils/request.js";
// import { setToken } from "../utils/auth.js";
export default {
  data() {
    return {
      tVal: "",
      pVal: "",
      comName: ""
    };
  },
  methods: {
    login() {
      console.log(this.tVal, this.pVal);
      // if(this.tVal === "token"&&this.pVal==="dc"){
      // setToken()
      // this.comName = sessionStorage.getItem("comName")
      // if(!this.comName || this.comName==="Login"){
      // 	this.$router.push({
      // 		name:"Home"
      // 	})
      // }else{
      // 	this.$router.push({
      // 	name:this.comName
      // })
      // }

      // }else{
      // 	alert("账号或密码错误")
      // }
      post("/api/v1/auth/login", {
        userName: this.tVal,
        password: this.pVal
      })
        .then(res => {
          console.log(res, res.data.token);
          this.comName = sessionStorage.getItem("comName");
          if (res.data.token) {
            if (!this.comName || this.comName === "Login") {
              this.$router
                .push({
                  name: "Home"
                })
                .catch(() => {});
            } else {
              localStorage.setItem("token", res.data.token);
              this.$router
                .push({
                  name: this.comName
                })
                .catch(() => {});
            }
          } else {
            alert(res.data.message);
          }
        })
        .catch(() => {
          alert("服务器请求失败");
        });
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #d81e06;
}
.logo {
  width: 160px;
  display: block;
  margin: 2rem auto;
}
.ipt {
  display: block;
  height: 2rem;
  line-height: normal;
  width: 75%;
  margin: 1rem auto;
  padding: 0;
}
.reg {
  float: right;
  font-size: 0.8rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
}
</style>
