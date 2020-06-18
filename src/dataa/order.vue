<template>
  <div class="order">
    <div class="order-list-title">
      <ul class="order-list">
        <li>全部</li>
        <li>待付款</li>
        <li>待收货</li>
      </ul>
    </div>
    <ul class="order-info">
      <li class="order-info-li" v-for="(item) in orderList" :key="item">
        <div class="order-info-all">
          <div class="order-info-all-top">
            <div class="order-info-all-top-left">
              <p class="order-data">订单日期：{{dateFormat(item.time)}}</p>
              <p class="order-num">订单编号：{{ item.time }}</p>
            </div>
            <div class="top-right" v-if="item.buy != true">待付款</div>
            <div class="top-right" v-else>已支付</div>
          </div>
          <div class="order-info-content" v-for="(items) in item.list" v-bind:key="items">
            <div class="order-info-content-img">
              <img :src="items.img" alt />
            </div>
            <span class="order-info-content-name">{{ items.name }}</span>
          </div>
          <div class="order-bottom">
            <span>共{{ item.allCount }}件商品</span>
            <span>总金额：</span>
            <strong>{{ item.allPricr }}元</strong>
          </div>
          <div class="order-bottom-option" v-if="item.buy != true">
            <div class="order-bottom-option-item">取消订单</div>
            <div class="order-bottom-option-item gopayment">立即付款</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: []
    };
  },
  created() {
    this.getOrder();
    // this.$store.commit('footerShow',false)
    // this.$store.commit('headerShow',{header:true,slot:'我的订单'})
  },
  methods: {
    // 获取订单列表
    getOrder() {
      this.orderList = this.$store.state.order;
    },
    dateFormat: function(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  },
  computed: {},
  components: {}
};
</script>
<style scoped>
.order {
  background-color: #f5f5f5;
  padding-top: 1rem;
}
.order-list-title {
  height: 0.8rem;
}
.order-list {
  background-color: #fff;
  border-bottom: 0.01rem solid #ececec;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
}
.order-list li {
  text-align: center;
  width: 33.3%;
  height: 1.6rem;
  line-height: 1.6rem;
}
.order-info-li {
  margin-top: 0.2rem;
}
.order-info-all {
  padding: 0 0.32rem;
  font-size: 0.24rem;
  background-color: #fff;
}
.order-info-all-top {
  border-bottom: 1px solid #ececec;
  padding: 0.3rem 0 0.2rem;
  display: flex;
  justify-content: space-between;
}
.order-data {
  font-size: 0.35rem;
  margin-bottom: 0.06rem;
  color: rgba(60, 60, 60, 0.87);
}
.order-num {
  font-size: 0.28rem;
  color: #999;
}
.top-right {
  color: #ff5722;
  font-size: 0.35rem;
}
.order-info-content {
  padding: 0.2rem 0.1rem;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.order-info-content-img {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.15rem;
}
.order-info-content-img img {
  width: 100%;
  height: 100%;
}
.order-info-content-name {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.25rem;
}
.order-bottom {
  padding: 0.2rem 0;
  text-align: right;
  border-top: 1px solid #ececec;
}
.order-bottom-option {
  text-align: right;
  padding-bottom: 0.2rem;
}
.order-bottom-option-item {
  display: inline-block;
  padding: 0.1rem 0.2rem;
  border: 1px solid #999;
}
.gopayment {
  color: #ff5722;
  border: 1px solid #ff5722;
}
</style>    