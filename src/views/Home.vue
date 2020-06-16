<template>
  <div class="home">
    <header>
      <div class="downApp" ref="abc">
        <a id="aImg">
          <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/31/31650.png" alt />
        </a>

        <a id="close" @click="closeTop">
          <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/31/31649.png" alt />
        </a>
      </div>
    </header>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/35/35390.gif"
          class="ad"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/35/35413.jpg"
          class="ad"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/35/35373.jpg"
          class="ad"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="res">
      <div class="res_wrap">
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200603_24e84hccbg43c75g35d8hk792jf19_135x135.gif_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">新人福利</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_3gg7195aff5ldk8d73hlljgggl5a5_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">女装</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_5ike1d2c4acjkb7j6baid50ila4f5_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">女鞋</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200603_7g5g8bj3k5i8b1hjdgi6dj6kfg329_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">上衣</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_74951kjh1l8eafc21115jh2a2j3ke_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">美妆/个护</div>
        </a>
      </div>
      <div class="res_wrap">
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200603_6i6fh97b332k1652ehih9056balkb_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">裤子</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_83j6i00i2d71162835858678bd1ak_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">内衣</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200603_3d758dch4927437k44i197e464fg2_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">裙子</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_1h7l2kj43eh3dc331e24bcice6049_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">母婴/童装</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_0c62l5k76cc3851eg38clhl3bg7kk_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">套装</div>
        </a>
      </div>
      <div class="res_wrap">
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_6bi0de20c82j235dk66idd4jg822b_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">包包</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_1db4983di0al7b6c65jfkkg2c1e86_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">男装男鞋</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_82h9ehf1362d15lah03kf2ae5j62a_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">配饰</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200522_85b0ab13lb238i0614dc2a56gl26l_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">家居</div>
        </a>
        <a href>
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/200603_6722ibl4gkc6bb2li4di4994kk082_135x135.png_640x640.v1cAC.40.webp"
            alt
            class="res_img"
          />
          <div class="res_title">运动</div>
        </a>
      </div>
    </div>
    <div class="hot">
      <Goods v-for="item in list" :key="item._id" :product="item"></Goods>
    </div>
  </div>
</template>

<script>
import Goods from "../components/Goods.vue";
import { getList } from "../services/products.js";
export default {
  name: "Home",
  data() {
    return {
      list: []
    };
  },
  components: {
    Goods
  },
  async created() {
    const res = await getList(1, 8);
    this.list = res.data.products;
  },
  methods: {
    closeTop() {
      this.$refs.abc.style.display = "none";
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.ad {
  width: 100%;
}
.hot {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
#aImg {
  width: 100%;
  height: 100%;
  display: block;
}
#aImg img {
  display: block;
  width: 100%;
  height: 100%;
}
.downApp {
  position: relative;
  display: block;
  height: 4rem;
  overflow: hidden;
}
#close {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2rem;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
#close img {
  width: 1.4rem;
  height: 1.4rem;
  display: block;
  margin: 0 auto;
}
.res {
  margin-bottom: 0.4rem;
  height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.res_wrap {
  width: 100%;
  display: flex;
  height: 5rem;
}
.res_wrap a {
  display: flex;
  flex-direction: column;
  color: #666;
  width: 20%;
  height: 100%;
  text-align: center;
}

.res_img {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
</style>