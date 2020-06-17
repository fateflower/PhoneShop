<template>
  <div>
    <!-- <a href="../dataa/Dizhi">111</a> -->
    <div to="../dataa/Dizhi">收货地址</div>
    <router-link>命名路由方式：/user/list</router-link>
    <!-- <router-view></router-view> -->
    <router-link></router-link>
  </div>
</template>

<script>
export default {
  methods: {
    godizhi() {
      this.$router.push({
        name: "dizhi"
      });
    }
  }
};
</script>

<style>
</style>