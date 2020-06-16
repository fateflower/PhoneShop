<template>
	<div class="nav">	
		<van-tabbar v-model="active" @change="onChange">
		  <van-tabbar-item icon="wap-home-o" name="Home">首页</van-tabbar-item>
		  <van-tabbar-item icon="fire-o" name="List">热卖</van-tabbar-item>
		  <van-tabbar-item icon="cart-o" name="Cart">购物车</van-tabbar-item>
		  <van-tabbar-item icon="user-circle-o" name="User">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				active: "Home"
			}
		},
		props:["activeName"],
		watch:{
			$route(){
				this.active = this.activeName
			}
		},
		methods:{
			 onChange(index) {
					this.$router.push({
						name:this.active
					}).catch(() => {})
				},
		}
	}
</script>

<style scoped>
.nav,
.nav ul {
  width: 100%;
  height: 46px;
}
.nav {
  border-top: solid #999 0.02rem;
}
.nav ul,
.nav li {
  margin: 0;
  padding: 0;
}
.nav ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav li {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
}
.nav img {
  width: 24px;
}
.nav li.active {
  color: #d81e06;
}
</style>
