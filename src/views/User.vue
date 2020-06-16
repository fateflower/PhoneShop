<template>
	<div class="user">
		<van-nav-bar
		  title="个人资料"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<van-cell-group>
			<van-image
			  round
			  width="10rem"
			  height="10rem"
			  :src="imgUrl"
			/>
		  <van-cell title="昵称" isLink :value="nickName" />
		  <van-cell title="性别" isLink value="男" />
		  <van-cell title="生日" isLink value="1999-09-08" />
		  <van-cell title="账号" isLink :value="userName" />
		  <van-cell title="个人简介" isLink value="每天早晨起床时,那种困顿..." />
		</van-cell-group>
		<van-button round type="info" size="large" color="#e54d42">退出登录</van-button>
	</div>
</template>

<script>
	import {get} from "../utils/request.js"
	export default{
		data(){
			return{
				imgUrl:"",
				nickName:"",
				userName:""
			}
		},
		created() {
			get("/api/v1/users/info"
			).then((res)=>{
				this.imgUrl = "http://api.cat-shop.penkuoer.com" + res.data.avatar
				this.nickName = res.data.nickName
				this.userName = res.data.userName
			}).catch((err)=>{
				console.log(err)
			})	
		},
		methods:{
			onClickLeft(){
				window.history.go(-1)
			}
			    
		}
	}
	
</script>

<style scoped>
	.van-image--round{
		margin:0 auto;display:block
	}
	.van-button{
		margin-top:3rem;
	}
</style>
