<template>
  <div class="hot">
    <ul class="list">
      <li v-for="item in list" :key="item._id">
        <dl style="margin-top:10px;float:left">
          <dt>
            <a href="www">
              <img class="tup" :src="item.img" alt />
            </a>
          </dt>
          <div class="xq">
            <a href="https://www.iliangcang.com/i/goods/?id=280069">
              <div class="sm">{{item.intro}}</div>
            </a>
            <div class="jx">历史价格￥{{item.pre_price}}</div>
            <div class="price">￥{{item.price}}</div>
          </div>
        </dl>
      </li>
    </ul>
    <van-button
      icon="replay"
      type="info"
      :disabled="isLoading"
      @click="loadMoreHandle"
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      loading-text="加载中..."
      :loading="load"
      :display="active"
    >{{this.butxt}}</van-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Mygoods",
  data() {
    return {
      list: [],
      listAll: [],
      isLoading: true,
      n: 1,
      load: false,
      butxt: "点击加载更多",
      active: "none"
    };
  },
  created() {
    this.getMygoods(this.n);
  },
  methods: {
    async getMygoods(n) {
      await axios
        .get("http://192.168.18.65:3000/goods")
        .then(res => {
          this.active = "block";
          this.load = false;
          res = res.data;
          if (res.code === 0) {
            this.listAll = res.data;
            this.list = this.listAll.slice(0, 4 * n);
          }
        })
        .catch(err => {
          this.load = false;
        });
      if (this.list.length == this.listAll.length) {
        this.butxt = "没有更多啦~";
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    },
    loadMoreHandle() {
      this.load = true;
      this.n++;
      this.getMygoods(this.n);
    }
  }
};
</script>

<style scoped>
.hot {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.list li {
  width: 50%;
  float: left;
}

.car {
  line-height: 1.499;
  position: relative;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 10px;
  border-radius: 4px;
  color: darkorange;
  border-color: #d9d9d9;
  float: right;
  margin-top: 10px;
}

.tup {
  width: 90%;
  margin: 0 5%;
}

.yb dl {
  width: 50%;
  /* padding-bottom: 70px; */
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

.xz {
  margin: 10px 8px;
  height: 25px;
  width: 25px;
}
</style>
