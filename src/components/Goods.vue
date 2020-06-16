<template>
  <div class="item">
    <router-link :to="{
			name:'Detail',
			params:{
				id:product._id
			}
		}">
      <img
        :src="
product.coverImg
? product.coverImg
: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3055768216,2672833891&fm=11&gp=0.jpg'
"
        alt
      />
    </router-link>
    <h5>{{ product.name | spliceStr }}</h5>
    <p>￥{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  filters: {
    spliceStr(str) {
      return str.length > 10 ? str.substr(0, 9) + "..." : str;
    }
  }
};
</script>

<style scoped>
.item {
  width: 40%;
  padding: 0.5rem;
  border: solid 0.02rem #ccc;
  margin-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
}
.item h5 {
  text-align: center;
  font-size: 1rem;
}
.item h5,
p {
  padding: 0;
  margin: 0;
}
.item img {
  width: 100%;
}
.item p {
  text-align: center;
  color: red;
  font-size: 1.2rem;
}
</style>
