<template>
	<div class="login">
		<div class="logo"></div>
		<van-field v-model="tVal" placeholder="请输入用户名" left-icon="smile-o" />
		<van-field v-model="pVal" type="password" placeholder="请输入密码" clearable left-icon="thumb-circle-o" @keyup="enter"/>

		<button class="btn" @click="login" >登录</button>
		<div id="btn_down">
			<a href="">忘记密码?</a>
			<router-link class="reg" :to="{
			name:'Reg',
			query:{
				comName:this.comName
			}
		}">立即注册</router-link>
		</div>
		<van-divider :style="{ color: '#aaa', borderColor: '#aaa', padding: '0 16px' }">
			其他登陆方式
		</van-divider>
		<div id="icon_login">
			<span class="iconfont icon-zhifubao"></span>
			<span class="iconfont icon-logo-qq"></span>
			<span class="iconfont icon-weixin"></span>
			<span class="iconfont icon-weibo"></span>
		</div>

	</div>
</template>

<script>
	import {
		post
	} from "../utils/request.js";
	import {
		Toast
	} from 'vant';
	import {
		Notify
	} from 'vant';
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

				if (!this.tVal) {
					Notify("请输入用户名");
				} else if (!this.pVal) {
					Notify("请输入密码");
				} else {
					Toast.loading({
						message: '加载中...',
						forbidClick: true,
					});
					post("/api/v1/auth/login", {
							userName: this.tVal,
							password: this.pVal
						})
						.then(res => {
							Toast.clear()
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
								if (res.data.message == "user not found") {
									Notify("用户名不存在");
								} else {
									Notify(res.data.message);
								}
							}
						})
						.catch(() => {
							Toast.clear()
							Notify("登陆失败，请稍后重试");
						});

				}

			},
			enter(e){
				if(e.keyCode == 13){
					this.login()
				}
			}
		}
	};
</script>

<style scoped>
	.logo {
		width: 100%;
		display: block;
		height: 15rem;
	}

	.van-cell {
		border: 1px solid #E8E8E8;
		border-radius: 24px;
		margin: 0.625rem auto;
		width: 80%;
	}

	.btn {
		border-radius: 24px;
		display: block;
		width: 80%;
		height: 46px;
		background-color: #EBD428;
		color: #101010;
		font-size: 1.1rem;
		line-height: 46px;
	}

	#btn_down {
		width: 80%;
		margin: 0 auto;
		height: 1rem;
		display: flex;
		justify-content: space-between;
	}

	#btn_down a {
		color: blue;
		font-size: 0.75rem;
		line-height: 1rem;
	}

	.login {
		background: url(../../public/642.png) repeat-y;
		background-size: cover;
		background-position-y: -300px;
	}

	#icon_login {
		width: 50%;
		margin: 0 auto;
		overflow: hidden;
		height: 3rem;

	}

	span {
		display: inline-block;
		font-size: 2rem;
		width: 25%;
		text-align: center;
		vertical-align: middle;
	}

	span:nth-child(2) {
		font-size: 2.4rem;
		color: #0086B3;
	}

	span:nth-child(1) {
		color: #0086B3;
	}

	span:nth-child(3) {
		color: #55A532;
	}

	span:nth-child(4) {
		color: #FF4500;
	}
</style>
