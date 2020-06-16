<template>
	<div class="about">
		<van-nav-bar title="商品列表" left-text="返回" left-arrow   @click-left="onClickLeft">
		  <template #right>
		    <van-icon name="search" size="18" />
		  </template>
		</van-nav-bar>
	  <div class="list">
	    <Goods v-for="item in list" :key="item._id" :product="item"></Goods>
	  </div>
	  <button :disabled="isLoading" @click="loadMoreHandle" class="btn">
	    加载更多
	  </button>
	</div>
</template>

<script>
	import { getList } from "../services/products";
	import Goods from "../components/Goods";
	export default{
		data(){
			return{
				list:[],
				pages:1,
				page:1,
				per:8,
				isLoading:false
			}
		},
		created(){
			this.loadMoreHandle()
		},
		methods:{
			async loadMoreHandle(){
				this.isLoading = true
				const res = await getList(this.page,this.per)
				this.list = [...this.list,...res.data.products]
				this.pages = res.data.pages
				this.page++
				this.isLoading = false
			},
			onClickLeft(){
				window.history.go(-1)
			}
		},
		components:{
			Goods
		}
	}
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 50px;
}
.van-nav-bar{
	background:rgb(242, 242, 242) !important;
	position: fixed;
	width: 100%;
}
</style>

