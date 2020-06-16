<template>
  <div class="cart">
    <header>购物车</header>
    <main>
      <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/29/29910.png" alt />
    </main>
    <div class="logo">
      <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/23/23442.png" alt />
    </div>
    <div class="yb">
      <dl style="margin-top:10px;float:left">
        <dt>
          <a href="www">
            <img
              class="tup"
              src="https://imgs-qn.iliangcang.com/ware/goods/tmb/2/280/280069.jpg?t=1591673437"
              alt
            />
          </a>
        </dt>
        <div class="xq">
          <a href="https://www.iliangcang.com/i/goods/?id=280069">
            <div class="sm">蒸汽拖把 | 140℃高温蒸汽杀菌除螨</div>
          </a>

          <div class="jx">APIXINTL</div>
          <div class="price">￥499.00</div>
        </div>
      </dl>
      <dl style="margin-top:10px;float:right">
        <dt>
          <a href="www">
            <img
              class="tup"
              src="https://imgs-qn.iliangcang.com/ware/goods/tmb/2/280/280068.jpg?t=1591671645"
              alt
            />
          </a>
        </dt>
        <div class="xq">
          <a href="https://www.iliangcang.com/i/goods/?id=280069">
            <div class="sm">台地两用空气循环风扇 | 高颜值，超静音</div>
          </a>

          <div class="jx">家奈</div>
          <div class="price">￥699.00</div>
        </div>
      </dl>
      <dl style="margin-top:10px;float:left">
        <dt>
          <a href="www">
            <img
              class="tup"
              src="https://imgs-qn.iliangcang.com/ware/goods/tmb/2/280/280067.jpg"
              alt
            />
          </a>
        </dt>
        <div class="xq">
          <a href="https://www.iliangcang.com/i/goods/?id=280069">
            <div class="sm">阿普苏EDT香水 | 享受青草铺面而来的味道</div>
          </a>

          <div class="jx">Ulrich Lang</div>
          <div class="price">￥1169.00</div>
        </div>
      </dl>
      <dl style="margin-top:10px;float:right">
        <dt>
          <a href="www">
            <img
              class="tup"
              src="https://imgs-qn.iliangcang.com/ware/goods/tmb/2/280/280066.jpg?t=1591584057"
              alt
            />
          </a>
        </dt>
        <div class="xq">
          <a href="https://www.iliangcang.com/i/goods/?id=280069">
            <div class="sm">降糖电饭煲 | 红点奖得主 脱糖率92%</div>
          </a>

          <div class="jx">Bokuk</div>
          <div class="price">￥899.00</div>
        </div>
      </dl>
      <dl></dl>
    </div>
    <div class="button">底部结账</div>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;

  font: inherit;
}
.cart {
  position: relative;
}
header {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #333333;
  font-size: 14px;
  background-color: #ffffff;
  color: #333333;
}
main {
  width: 100%;
  height: 250px;
  background-color: rgb(250, 250, 250);
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
main img {
  width: 200px;
  height: 110px;
  margin-top: 80px;
}
.logo {
  width: 100%;
  height: 30px;
  text-align: center;
}
.logo img {
  width: 100px;
  height: 20px;
  margin-top: 10px;
}
.yb {
  height: 500px;
  width: 100%;
}
.tup {
  width: 90%;
  margin: 0 5%;
}
.yb dl {
  width: 50%;
  padding-bottom: 70px;
  /* border: solid 5px rgb(250, 250, 250); */
}
.price {
  padding-left: 10px;
  margin-top: 0px;
  float: left;
  height: 12px;
  color: #3193f3;
  /* font-size: 12px; */
}
.xq {
  width: 90%;
  height: 100px;
  margin: -4px 5%;
  box-shadow: 0 0 3px #afaeae;
  border-radius: 0 0 3px 3px;
}
.xq p {
  width: 90%;
}
.sm {
  font-size: 12px;
  line-height: 1.5;
  word-break: break-all;
  /* height: 58px; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-left: 8px;
  padding-top: 13px;
  /* font-size: 20px; */
}
.jx {
  padding-left: 15px;
  margin-top: 7px;
  font-size: 10px;
  color: #5b5a5a;
}
.button {
  width: 100%;
  height: 40px;
  background: red;
  position: fixed;
  bottom: 46px;
}
</style>
