<template>
  <div class="mobile-content">
    <img alt="宣传图" :src="banner" class="banner" />
    <div class="content-in">
      <div class="search-out">
        <div class="search-in">
          <div class="search-self-out">
            <!-- <i class="el-icon-search search-self"></i> -->
            <el-input
              class="inline-input"
              placeholder="请输入你的旺旺号或订单编号"
              v-model="inputValue"
            >
            </el-input>
          </div>
          <div class="search-bt" @click="search">查询</div>
        </div>
      </div>
      <div class="null-box"></div>
      <div class="active-instructions">
        <!-- <div class="active-title">
          <div class="cir"></div>
          {{ rulesObj.title }}
          <div class="cir"></div>
        </div> -->
        <div class="active-rules">
          <!-- <div class="rules-reward">{{ rulesObj.reward }}</div>
          <div class="rules-remark">{{ rulesObj.remark }}</div> -->
          <div
            class="rules-list"
            v-for="(it, index) in rulesObj.rulesData"
            :key="index"
          >
            {{ it }}
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <div class="popup" :class="popupClass">
      <div class="mask"></div>
      <div class="layer" v-if="data">
        <div class="info">
          <div class="border1"></div>
          <div class="border2"></div>
          <img src="../assets/img/logo.png" alt="" class="logo" />
          <p class="title">{{ tips }}</p>
          <p class="subtitle">—— 您获得 ——</p>
          <div class="detail">
            <div class="box" v-for="(item, index) in data" :key="index">
              <p class="name">{{ item.activityPrizes }}</p>
              <p class="id">中奖ID：{{ item.winid }}</p>
              <p class="id">活动时间：{{ item.date }}</p>
              <p class="id" style="padding-bottom: 10px">
                活动名称：{{ item.activityTitle }}
              </p>
            </div>
          </div>
          <div
            class="btn2"
            @click="hidePoup"
            v-if="data.length <= 2"
            style="margin-top: 30px"
          >
            我知道了
          </div>
        </div>
      </div>
      <div v-else class="nodata">
        <p class="title">{{ tips }}</p>
        <div class="btn2" @click="hidePoup">我知道了</div>
      </div>
      <div v-if="data" class="bottomBtn">
        <div class="btn" @click="hidePoup" v-if="data.length > 2">我知道了</div>
      </div>
    </div>
  </div>
</template>

<script>
import https from "../components/http";
export default {
  name: "Moperation",
  props: {
    rulesObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
    banner: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: "",
      restaurants: [],
      popupClass: "",
      tips: "恭喜您，中奖了",
      data: null,
    };
  },
  created() {},
  methods: {
    // 获取奖品详情
    search() {
      this.data = null;
      // TATtest001
      let params = {
        winIdOrOrderNo: this.inputValue,
      };
      https.get("/EcAutoTools/awardInfo", params).then((res) => {
        this.popupClass = "show";
        if (res.data) {
          if (res.data.length == 0) {
            this.tips = "很遗憾，未中奖！";
            return;
          }
          this.data = res.data;
          this.data.forEach((ele) => {
            ele.date =
              ele.activityTime.substring(0, 10) +
              "至" +
              ele.endTime.substring(0, 10);
          });
          this.tips = "恭喜你中奖了！";
        } else {
          this.tips = res.msg;
        }
      });
    },
    // 关闭弹框
    hidePoup() {
      this.popupClass = "hide";
      setTimeout(() => {
        this.popupClass = "none";
      }, 300);
    },
  },
};
</script>
<style   scoped>
body {
  width: 100%;
  height: 100%;
}
.mobile-content {
  width: 100%;
  height: 100vh;
  background-color: #b41c2c;
}
.header-title {
  width: 100%;
  text-align: center;
}
.banner {
  width: 100%;
  height: 135px;
  display: block;
  /* margin-top: 10px; */
}
.content-in {
  width: 100%;
  height: auto;
  background-color: #b41c2c;
  padding-bottom: 30px;
  position: relative;
}

/* 搜索开始 */
.search-out {
  width: 90%;
  height: 40px;
  line-height: 0px;
  position: absolute;
  top: -30px;
  left: 5%;
  background-color: #ffffff;
  border-radius: 5px;
  filter: drop-shadow(0px 5px 12px rgba(100, 0, 0, 0.5));
}
.search-in {
  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: 5px;
  background-color: #e42727;

  overflow: hidden;
  display: flex;
}
.search-self-out {
  flex: 10;
  position: relative;
}
.search-self {
  color: #b2b2b2;
  font-size: 14px;
  text-align: left;
  display: inline-block;
  position: absolute;
  left: 2%;
  line-height: 40px;
  z-index: 100;
}
.inline-input {
  flex: 2;
  width: 100%;
}
.search-in /deep/ .el-input {
  width: 100%;
}
.search-in /deep/ .el-input__inner {
  border: 1px solid #e42727;
  box-sizing: border-box;
  border-radius: 4px 0 0 4px;
  padding: 0;
  padding-left: 10px;
  background: #fff5f5;
}
.search-bt {
  width: 19%;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  background-color: #e42727;
  font-size: 14px;
  color: #ffffff;
}
/* 搜索结束 */

.null-box {
  width: 100%;
  height: 30px;
}
/* 活动数名 */
.active-instructions {
  width: 90%;
  background: #ce3131;
  border: 2px solid #ee6057;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0 auto;
  color: #ffe2b7;
}
.active-title {
  font-size: 20px;
  text-align: center;
  margin-top: 22px;
}
.active-rules {
  font-size: 14px;
  line-height: 24px;
  padding: 20px;
}
.rules-reward {
  text-align: left;
  font-size: 14px;
}
.rules-list {
  text-align: left;
}
.rules-remark {
  text-align: left;
}
.cir {
  width: 6px;
  height: 6px;
  background: #ffedab;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}
@keyframes showPopup {
  0% {
  }

  100% {
  }
}

@keyframes hidePopup {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  display: none;
}
.mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 102;
  background-color: rgba(0, 0, 0, 0.6);
}
.layer {
  position: fixed;
  z-index: 103;
  left: 32px;
  right: 32px;
  background: #fff;
  top: 80%;
  /* top: calc(50% - 400px / 2); */
  background: linear-gradient(180deg, #fff5e7 0%, #dca97b 100%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
.layer .info {
  width: 100%;
  padding-bottom: 30px;
}
.border1,
.border2 {
  position: absolute;
  border-radius: 2px;
  border: 1px solid #b91919;
  box-sizing: border-box;
}
.border1 {
  left: 8px;
  right: 7.89px;
  top: 7px;
  bottom: 7.79px;
  opacity: 0.7;
}
.border2 {
  left: 5px;
  right: 4.08px;
  top: 13px;
  bottom: 13.16px;
  opacity: 0.3;
}
.logo {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 18px;
  top: 0px;
}
.info .title {
  color: #e42727;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.6);
  font-size: 20px;
  font-weight: 550;
  text-align: center;
  padding: 20px 0 10px;
}
.subtitle {
  text-align: center;
  color: #b98453;
  font-size: 14px;
  font-weight: 500;
}
.detail {
  max-height: 290px;
  overflow-y: scroll;
  position: relative;
}
.info .box {
  width: 90%;
  background: #d81f1f;
  border-radius: 4px;
  background-image: url("../assets/img/bg1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 12px auto;
  text-align: left;
}
.info .box .name {
  font-size: 20px;
  padding: 16px;
  color: #ffdaae;
  font-weight: 550;
}
.info .box .id {
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #f3ccc0;
  padding: 0 16px;
}
.btn {
  position: fixed;
  width: 80%;
  height: 40px;
  line-height: 40px;
  left: 10%;
  top: 85%;
  z-index: 103;
  background: #e42727;
  border-radius: 4px;
  font-size: 16px;
  color: #ffdaae;
}

.nodata {
  position: fixed;
  z-index: 103;
  background: #fff;
  width: 289px;
  height: 143px;
  left: calc(50% - 289px / 2);
  top: 50%;
  margin-top: 70px;
  border-radius: 4px;
}
.nodata .title {
  font-size: 16px;
  margin: 20px 0 40px;
  font-weight: 550;
}
.btn2 {
  position: relative;
  width: 80%;
  height: 40px;
  line-height: 40px;
  background: #e42727;
  border-radius: 4px;
  font-size: 16px;
  color: #ffdaae;
  margin: auto;
  margin-top: 40px;
}
@keyframes showLayer {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  100% {
    transform: translateY(-100%);
    opacity: 1;
  }
}

@keyframes hideLayer {
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }

  100% {
    transform: translateY(200px);
    opacity: 0;
  }
}
.show {
  display: block;
}
.show .mask {
  animation: showPopup 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
}

.show .layer {
  animation: showLayer 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
}
.show .nodata {
  animation: showLayer 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
}
/* .show .bottomBtn {
  animation: showLayer 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
} */
.hide {
  display: block;
}
.hide .mask {
  animation: hidePopup 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
}

.hide .layer {
  animation: hideLayer 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
}
.hide .nodata {
  animation: hideLayer 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
}
.hide .bottomBtn {
  animation: hideLayer 0.3s cubic-bezier(0, 0.79, 0.59, 1) both;
}
.none {
  display: none;
}
</style>