<template>
	<div class="nav">
		<ul>
			<li @click="tapPage(0,'Home')" :class="{active:selectIndex==0}">
				<img :src="iconHome" alt="">
				<span>首页</span>
			</li>
			<li @click="tapPage(1,'List')" :class="{active:selectIndex==1}">
				<img :src="iconList" alt="">
				<span>列表</span>
			</li>
			<li @click="tapPage(2,'Cart')" :class="{active:selectIndex==2}">
				<img :src="iconCart" alt="">
				<span>购物车</span>
			</li>
			<li @click="tapPage(3,'User')" :class="{active:selectIndex==3}">
				<img :src="iconUser" alt="">
				<span>我的</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: {
					icons: {
						home: {
							default: require("../assets/images/home.png"),
							selected: require("../assets/images/home-sel.png")
						},
						list: {
							default: require("../assets/images/list.png"),
							selected: require("../assets/images/list-sel.png")
						},
						cart: {
							default: require("../assets/images/cart.png"),
							selected: require("../assets/images/cart-sel.png")
						},
						user: {
							default: require("../assets/images/user.png"),
							selected: require("../assets/images/user-sel.png")
						}
					}
				},
				selectIndex: 0,
			}
		},
		props:["activeName"],
		computed: {
			iconHome() {
				return this.selectIndex == 0 ?
					this.nav.icons.home.selected :
					this.nav.icons.home.default;
			},
			iconList() {
				return this.selectIndex == 1 ?
					this.nav.icons.list.selected :
					this.nav.icons.list.default;
			},
			iconCart() {
				return this.selectIndex == 2 ?
					this.nav.icons.cart.selected :
					this.nav.icons.cart.default;
			},
			iconUser() {
				return this.selectIndex == 3 ?
					this.nav.icons.user.selected :
					this.nav.icons.user.default;
			}
		},
		methods:{
			tapPage(index,routeName){
				this.selectIndex = index;
				this.$router.push({
					name:routeName
				}).catch(() => {})
			}
		},
		watch:{
			$route(){
				if(this.activeName == "Home"){
					this.selectIndex = 0
				}else if(this.activeName == "List"){
					this.selectIndex = 1
				}else if(this.activeName == "Cart"){
					this.selectIndex = 2
				}else if(this.activeName == "User"){
					this.selectIndex = 3
				}
			}
		}
	}
</script>

<style scoped>
	.nav,.nav ul{
		width: 100%;
		height: 46px;
	}
	.nav{
		border-top: solid #999 0.02rem;
	}
	.nav ul,.nav li{
		margin: 0;
		padding: 0;
	}
	.nav ul{
		display:  flex;
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
	.nav img{
		width: 24px;
	}
	.nav li.active {
	  color: #d81e06;
	}
</style>
