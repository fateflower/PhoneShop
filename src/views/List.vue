<template>
  <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
    <template #content>
      <div v-for="(item,index) in list" :key="index">
        <van-image v-if="active === index" :src="item.info[0].title_img" />

        <!-- <div class="shop-wrapper">
          <ul ref="itemList">
            <li class="shops-li" v-for="(right, index1) in list" :key="index1">
              <div v-for="(items, index) in right.info" :key="index">
                <div class="itemList-img">
                  <img :src="items.title_img" alt />
                </div>
                <div class="itemList-title">
                  <span>{{ items.title }}</span>
                </div>
                <div class="item-list">
                  <ul class="clearfix">
                    <li v-for="(item, index) in items.list" :key="index">
                      <div class="item-list-img">
                        <img :src="item.img" alt class="imgabc" />
                      </div>
                      <div class="item-list-name">{{ item.name }}</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="more">查看更多</div>
            </li>
          </ul>
        </div>-->
      </div>
    </template>
  </van-tree-select>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      active: 0,
      items: [],
      list: []
    };
  },
  created() {
    Axios.get("https://shiyaming1994.github.io/mi/static/data.json")
      .then(res => {
        this.list = res.data;
        console.log(this.list);
        for (var i = 0; i < res.data.length; i++) {
          console.log(res.data[i].left);

          this.items.push({
            text: res.data[i].left
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.item-list-img {
  height: 10px;
  width: 10px;
}
</style>