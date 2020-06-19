<template>
<<<<<<< HEAD
  <div class="user">
    <van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="box"></div>
    <van-image round width="8rem" height="8rem" :src="imgUrl" />
    <van-cell-group>
      <van-cell title="昵称" isLink :value="nickName" />
      <van-cell title="性别" isLink :value="sex" @click="sexshow = true" />
      <van-popup v-model="sexshow" position="bottom" :style="{ height: '30%' }">
        <van-picker
          title="性别"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-popup>
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
      <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
      <van-cell title="生日" isLink :value="birthday" @click="showPopup" />
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="cancel"
          @confirm="confirm"
        />
      </van-popup>
      <van-cell title="账号" isLink :value="userName" />
      <van-cell title="个人简介" isLink :value="gerenTxt" @click="geren" />
      <van-popup v-model="showtxt" position="bottom" :style="{ height: '50%' }">
        <van-nav-bar
          title="个人简介"
          left-text="返回"
          right-text="保存"
          left-arrow
          @click-left="txtLeft"
          @click-right="onClickRight"
        />
        <textarea rows="3" cols="20" v-model="txtVal" id="ipt" maxlength="50"></textarea>
      </van-popup>
    </van-cell-group>
    <van-button round type="info" size="large" color="#e54d42" @click="close">退出登录</van-button>
  </div>
=======
	<div class="user">
		<van-nav-bar title="个人资料" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="box"></div>
		<van-image round width="8rem" height="8rem" :src="imgUrl" />
		<van-cell-group>
			<van-cell title="昵称" isLink :value="nickName" />
			<van-cell title="性别" isLink :value="sex" @click="sexshow = true" />
			<van-popup v-model="sexshow" position="bottom" :style="{ height: '30%' }">
				<van-picker title="性别" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" />
			</van-popup>
			<van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
			<van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 0.25rem;">
				<van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons" @change="onChange"
				 @exchange="onExchange" />
			</van-popup>
			<van-cell title="生日" isLink :value="birthday" @click="showPopup" />
			<van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
				<van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate"
				 @cancel="cancel" @confirm="confirm" />
			</van-popup>
			<van-cell title="账号" isLink :value="userName" />
			<van-cell title="个人简介" isLink :value="gerenTxt" @click="geren" />
			<van-popup v-model="showtxt" position="bottom" :style="{ height: '50%' }">
				<van-nav-bar title="个人简介" left-text="返回" right-text="保存" left-arrow @click-left="txtLeft" @click-right="onClickRight" />
				<textarea rows="3" cols="20" v-model="txtVal" id="ipt" maxlength="50">
		</textarea>
			</van-popup>
		</van-cell-group>
		<van-button round type="info" size="large" color="#e54d42" @click="close">退出登录</van-button>
	</div>
>>>>>>> 00f7f449a722256d5ef01115050993adbf79bd56
</template>

<script>
import { get } from "../utils/request.js";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
      imgUrl: "",
      nickName: "",
      userName: "",
      show: false,
      birthday: "1999-09-08",
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 0, 1),
      currentDate: new Date(),
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      showtxt: false,
      txtVal: "",
      gerenTxt: "每天早晨起床时,那种困顿...",
      columns: ["男", "女"],
      sexshow: false,
      sex: "男"
    };
  },
  created() {
    get("/api/v1/users/info")
      .then(res => {
        this.imgUrl = "http://api.cat-shop.penkuoer.com" + res.data.avatar;
        this.nickName = res.data.nickName;
        this.userName = res.data.userName;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    close() {
      localStorage.removeItem("token");
      this.$router
        .push({
          name: "Home"
        })
        .catch(() => {});
    },
    showPopup() {
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    confirm(value) {
      var date = new Date(value);
      var Y = date.getFullYear() + "-";
      var M = date.getMonth() + 1 + "-";
      var D = date.getDate() + " ";
      if (date.getMonth() + 1 < 10) {
        M = "0" + M;
      }
      if (D < 10) {
        D = "0" + D;
      }
      this.birthday = Y + M + D;
      this.show = false;
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    geren() {
      this.showtxt = true;
      this.txtVal = this.gerenTxt;
    },
    onClickRight() {
      this.gerenTxt = this.txtVal;
      this.showtxt = false;
    },
    onConfirm(val) {
      this.sex = val;
      this.sexshow = false;
    },
    onCancel() {
      this.sexshow = false;
    },
    txtLeft() {
      this.showtxt = false;
    }
  }
};
</script>

<style scoped>
<<<<<<< HEAD
.user {
  position: relative;
  overflow: hidden;
}
=======
	html{
		font-size: 100%;
	}
	.user {
		position: relative;
		overflow: hidden;
	}

	.box {
		width: 100%;
		height: 12.5rem;
		background: url(../../public/233.jpg) no-repeat;
		background-position-x: -5.125rem;
		background-position-y: -7.5rem;
		position: absolute;
	}
>>>>>>> 00f7f449a722256d5ef01115050993adbf79bd56

.box {
  width: 100%;
  height: 12.5rem;
  background: url(../../public/233.jpg) no-repeat;
  background-position-x: -82px;
  background-position-y: -120px;
  position: absolute;
}

.van-image--round {
  margin: 0 auto;
  display: block;
  margin-bottom: 2.5rem;
  margin-top: 2rem;
}

.van-button {
  margin-top: 3rem;
}

#ipt {
  border: none;
  width: 100%;
  height: 70%;
}
</style>
