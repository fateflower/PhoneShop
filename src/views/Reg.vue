<template>
  <div class="Reg">
    <div class="logo"></div>
    <van-field v-model="tVal" placeholder="请输入用户名" left-icon="smile-o" />
    <van-field v-model="nName" placeholder="请输入昵称" left-icon="music-o" />
    <van-field
      v-model="pVal"
      type="password"
      placeholder="请输入密码"
      clearable
      left-icon="thumb-circle-o"
    />
    <div class="File-Box">
      <input type="file" @change="changepic()" id="file" ref="fileInt" />
      <div class="Show-Box">
        <span>+</span>
        <span>选择文件</span>
      </div>
      <img src alt id="img3" ref="yuImg" />
    </div>

    <button class="btn" @click="reg">注册</button>
    <div id="btn_down">
      <van-checkbox v-model="checked" label-disabled icon-size="14px">
        我已阅读并同意
        <a href>《用户服务协议》</a>
      </van-checkbox>
      <router-link class="reg" to="/login">已有账号，去登陆</router-link>
    </div>
  </div>
</template>

<script>
import { post } from "../utils/request";
import { Notify } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {
      tVal: "",
      pVal: "",
      nName: "",
      avatar: "",
      data: "",
      checked: false
    };
  },
  methods: {
    reg() {
      if (!this.tVal) {
        Notify("用户名不能为空");
      } else if (!this.nName) {
        Notify("请输入昵称");
      } else if (!this.pVal) {
        Notify("请输入密码");
      } else if (!this.checked) {
        Notify("请阅读并勾选用户服务协议");
      } else {
        Toast.loading({
          message: "注册中...",
          forbidClick: true
        });
        post("/api/v1/common/file_upload", this.data, {
          headers: {
            "Content-Type": "multipart/from-data"
          }
        })
          .then(res => {
            console.log(res);
            this.avatar = res.data.info;
            post("/api/v1/auth/reg", {
              userName: this.tVal,
              password: this.pVal,
              nickName: this.nName,
              avatar: this.avatar
            })
              .then(res => {
                Toast.clear();
                console.log(res.data);
                if (res.data.code == "error") {
                  Notify(res.data.message);
                } else if (res.data.code == "success") {
                  this.$router.push({
                    name: "Login"
                  });
                }
              })
              .catch(err => {
                Toast.clear();
                Notify("注册失败，请稍后重试");
              });
          })
          .catch(err => {
            Toast.clear();
            if (err.toJSON().message == "Request failed with status code 500") {
              Notify("请上传头像");
            } else if (
              err.toJSON().message == "Request failed with status code 413"
            ) {
              Notify("图片过大，请更换其他图片进行上传");
            }
          });
      }
    },
    changepic() {
      var yulan = this.$refs;
      var file = yulan.fileInt.files[0];
      this.data = new FormData();
      this.data.append("file", file);

      var reads = new FileReader();
      reads.readAsDataURL(file);

      reads.onload = function(e) {
        yulan.yuImg.src = this.result;
      };
    }
  }
};
</script>

<style scoped>
.Reg {
  background: url(../../public/642.png) repeat-y;
  background-size: cover;
  background-position-y: -300px;
}

.logo {
  width: 100%;
  display: block;
  height: 15rem;
}

.btn {
  border-radius: 24px;
  display: block;
  width: 80%;
  height: 46px;
  background-color: #ebd428;
  color: #101010;
  font-size: 1.1rem;
  line-height: 46px;
  margin: 0.75rem auto;
}

.File-Box {
  position: relative;
  width: 150px;
  height: 150px;
  margin-left: 50px;
  margin-bottom: 5px;
}

.File-Box input[type="file"] {
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  position: absolute;
}

.Show-Box {
  display: block;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #dfdfdf;
  border: 1px solid #cccccc;
}

.Show-Box div {
  font-size: 80px;
  color: #999999;
  text-align: center;
}

.Show-Box span {
  display: block;
  font-size: 14px;
  text-align: center;
  color: #666666;
  width: 100%;
  line-height: 15px;
}

.Show-Box span:nth-child(1) {
  margin-top: 50px;
}

.File-Box:hover .Show-Box div,
.File-Box:hover .Show-Box span {
  color: #90c0f5;
}

#img3 {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 150px;
}

.van-cell {
  border: 1px solid #e8e8e8;
  border-radius: 24px;
  margin: 0.625rem auto;
  width: 80%;
}
#btn_down {
  width: 90%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  padding: 0 0.625rem;
  margin: 0 auto;
}
a {
  color: blue;
  line-height: none;
}
</style>
