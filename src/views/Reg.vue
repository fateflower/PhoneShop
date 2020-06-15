<template>
	<div class="login">
		<h1>注册页</h1>
		<img class="logo" src="../assets/logo.png">
		<input placeholder="请输入用户名" class="ipt" v-model="tVal">
		<input placeholder="请输入昵称" class="ipt" v-model="nName">
		<input placeholder="请输入密码" class="ipt" type="password" v-model="pVal">
		<div class="File-Box">
		<input type="file" @change="changepic()" id="file" ref="fileInt">
		<div class="Show-Box">
		    <span>+</span>
		    <span>选择文件</span>
		</div>
		<img src="" alt="" id="img3" ref="yuImg">
		</div>
		
		<button class="btn" @click="reg">注册</button>
		<router-link class="reg" to="/login">已有账号，去登陆</router-link>
	</div>
</template>

<script>
	import {post} from "../utils/request";
	export default{
		data(){
			return{
				tVal:"",
				pVal:"",
				nName:"",
				avatar:"",
			}
		},
		methods:{
			reg(){
				post("/api/v1/auth/reg",{
					userName:this.tVal,
					password:this.pVal,
					nickName:this.nName,
					avatar:this.avatar
				}).then((res)=>{
					this.$router.push({
						name:"Login"
					})
					//成功之后直接登陆 然后再跳转
				}).catch((err)=>{
					console.log(err)
				})
			},
			changepic(){
				console.log(this)
				var yulan  = this.$refs
				var file= yulan.fileInt.files[0]
				console.log(file)
				var data = new FormData()
				data.append('file',file)
				
				post("/api/v1/common/file_upload",data,{
					headers:{
						'Content-Type':'multipart/from-data'
					}
				}).then((res)=>{
					console.log(res)
					this.avatar = res.data.info
				}).catch((err)=>{
					console.log(err)
				})
				
				var reads = new FileReader();
				reads.readAsDataURL(file);
				
				reads.onload = function(e) {
				yulan.yuImg.src = this.result;
				
				}
			}
		}
	}
	
</script>

<style scoped>
	*{
	padding: 0px;
	margin:0px;
	}
	h1{
		text-align: center;
		color: #D81E06;
	}
	.logo{
		width: 160px;
		display: block;
		margin: 2rem auto;
	}
	.ipt{
		display: block;
		height: 2rem;
		line-height: normal;
		width: 75%;
		margin: 1rem auto;
		padding: 0;
	}
	.reg{
		float: right;
		font-size: 0.8rem;
		margin-right: 2rem;
		margin-bottom: 2rem;
	}
	.btn{
		margin: 0 auto;
		margin-bottom: 1rem;
	}
	.File-Box{
	position: relative;
	width:150px;
	height:150px;
	margin-left: 50px;
	margin-bottom: 5px;
	}
	.File-Box input[type=file]{
	cursor:pointer;
	width:100%;
	height:100%;
	z-index: 2;
	opacity:0;
	position: absolute;
	}
	.Show-Box{
	display: block;
	z-index: 1;
	width:100%;
	height:100%;
	position: absolute;
	background:#dfdfdf;
	border:1px solid #cccccc;
	}
	.Show-Box div{
	font-size: 80px;
	color: #999999;
	text-align: center;
	}
	.Show-Box span{
	display: block;
	font-size: 14px;
	text-align: center;
	color: #666666;
	width:100%;
	line-height: 15px;
	}
	.Show-Box span:nth-child(1){
		margin-top: 50px;
	}
	.File-Box:hover .Show-Box div,.File-Box:hover .Show-Box span{
	color:#90c0f5;
	}
	#img3{
		width: 150px;
		height: 150px;
		position: absolute;
		left: 150px;
	}
</style>