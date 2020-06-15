<template>
  <div class="home">
	  <header>
		<div class="downApp" ref="abc">
			<a id="aImg">
				<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7bd6e2151ddfe2562cb5a9ffff56cb6.png" alt="">
			</a>
			<a id="close" @click="closeTop"></a>
		</div>
	  </header>
	  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
	    <van-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/298faf388f44f3c146cde660a147e219.jpg?thumb=1&w=720&h=360" class="ad"></van-swipe-item>
	    <van-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f747b5bd42a94cb35714c3b8b208383a.jpg?thumb=1&w=720&h=360" class="ad"></van-swipe-item>
	    <van-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cb6f7a92c0668ab79d853667616e18a.jpg?thumb=1&w=720&h=360" class="ad"></van-swipe-item>
	  </van-swipe>
	<div class="hot">
		<Goods v-for="item in list" :key="item._id" :product="item"></Goods>
	</div>
  </div>
</template>

<script>
	import Goods from "../components/Goods.vue"
	import {getList} from "../services/products.js"
export default {
  name: 'Home',
  data(){
	return{
		list:[]
	}  
  },
  components: {
    Goods
  },
  async created(){
	  const res = await getList(1,8)
	  this.list = res.data.products
  },
  methods:{
	closeTop(){
		this.$refs.abc.style.display = "none"
	}
  }
}
</script>
<style scoped>
.ad {
  width: 100%;
}
.hot {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
#aImg{
	width: 100%;
	height: 100%;
	display: block;
}
#aImg img{
	display: block;
	width: 100%;
	height: 100%;
}
.downApp{
	    position: relative;
	    display: block;
	    height: 4rem;
	    overflow: hidden;
}
#close{
	display: block;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 2rem;
	height: 100%;
}
</style>