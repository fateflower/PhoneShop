<template>
  <div class="Hou">
    <ul>
      <li v-for="item in list" :key="item"></li>
    </ul>
  </div>
</template>

<script>
import { post } from "../utils/request.js";
import { put } from "../utils/request.js";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    post("/api/v1/auth/manager_login", {
      userName: "admin",
      password: "admin"
    }).then(res => {
      console.log(res);
    });
  }
};
</script>

<style>
</style>
