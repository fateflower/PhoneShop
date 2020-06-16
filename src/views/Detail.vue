<template>
  <div class="detail">
    <div id="box" onclick="javascript:history.back(-1);">
      <div id="box1"></div>
    </div>
    <h1>
      <img :src="imgSrc" alt />
    </h1>
    <p>{{name}}</p>
    <span>售价：{{price}}</span>
    <button class="ant-btn ant-btn-red">加入购物车</button>
  </div>
</template>

<script>
import { get } from "../utils/request.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      imgSrc: "",
      name: "",
      price: ""
    };
  },
  created() {
    get("/api/v1/products/" + this.id).then(res => {
      console.log(res.data);
      this.imgSrc = res.data.coverImg;
      this.name = res.data.name;
      this.price = res.data.price;
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  height: 100%;
}

h1,
span {
  font-size: 24px;
  margin-top: 10px;
}

h1 {
  display: block;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

p {
  display: block;
  text-align: center;
}

span {
  display: block;
  text-align: center;
  color: red;
}

.ant-btn-red {
  border-color: #ff5a44;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}

.ant-btn {
  line-height: 1.499;
  position: relative;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.9);
  border-color: #d9d9d9;
}

button {
  border: none;
  outline: none;
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 50px;
  background-color: darkorange;
  margin-top: 10px;
}

#box {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #ccc;
  opacity: 0.8;
}
#box1 {
  height: 100%;
  text-align: center;
  line-height: 30px;
  color: #ffffff;
}
</style>
