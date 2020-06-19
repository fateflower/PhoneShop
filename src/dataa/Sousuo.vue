<template>
  <div class="seek">
    <van-search
      placeholder="请输入搜索关键词"
      input-align="left"
      shape="round"
      background="#fff"
      @search="onSearch"
      @cancel="onCancel"
      v-model="value"
      show-action
    />
    <div class="seek-bottom">大家都在搜索</div>
    <ul>
      <li>
        <a href>粽子</a>
      </li>
      <li>
        <a href>玉米</a>
      </li>
      <li>
        <a href>大豆</a>
      </li>
      <li>
        <a href>香蕉</a>
      </li>
      <li>
        <a href>麻花</a>
      </li>
      <li>
        <a href>苹果</a>
      </li>
      <li>
        <a href>橙子</a>
      </li>
      <li>
        <a href>手表</a>
      </li>
      <li>
        <a href>粽子</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>

<style>
.seek {
  background-color: #fafafa;
}
.seek-bottom {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 16px;
  color: #333333;
}
.seek ul {
  width: 90%;
  height: 500px;
  margin: 0 auto;
  margin-top: 20px;
}
.seek ul li {
  height: 40px;
  width: 60px;
  float: left;
  margin: 10px;
}
.seek ul a {
  color: #999999;
  font-size: 16px;
  background-color: #ffffff;
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 40px;
}
</style>