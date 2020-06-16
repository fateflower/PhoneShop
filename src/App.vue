<template>
  <div id="app">
    <router-view class="main"></router-view>
    <Nav v-show="!hideNav" :activeName="activeName"></Nav>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
export default {
  data() {
    return {
      hideNav: false,
      activeName: ""
    };
  },
  components: {
    Nav
  },
  watch: {
    $route() {
      if (this.$route.meta.hideNav) {
        this.hideNav = true;
      } else {
        this.hideNav = false;
      }
      this.activeName = this.$route.name;
    }
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: auto;
}
a {
  color: black;
  text-decoration: none;
}
.btn {
  border: none;
  background-color: #d81e06;
  color: white;
  width: 75%;
  margin: 1rem auto;
  display: block;
  font-size: 1.2rem;
  text-align: center;
  height: 2.4rem;
}
</style>
