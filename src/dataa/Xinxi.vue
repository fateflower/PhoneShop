<template>
  <div>
    <van-nav-bar title="新增地址" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>这是个人信息
  </div>
</template>

<script>
export default {
  onClickLeft() {
    window.history.go(-1);
  }
};
</script>

<style>
</style>