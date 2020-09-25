<template>
  <div class="home">
    <component :is="ismOrpc" :rulesObj="rulesObj"/>
  </div>
</template>

<script>
import https from "../components/http";
import PCoperation from "@/components/PCoperation";
import Moperation from "@/components/Moperation";
export default {
  components: {
    PCoperation,
    Moperation,
  },
  data() {
    return {
      ismOrpc: "PCoperation",
      rulesObj:{
        title: "活动说明",
        reward: "购买1元礼包且10.1日0-2点实付满2千元即可送乳胶枕一个",
        remark: "活动细则：",
        rulesData: [
          "① 9.22-9.30日活动期间每个用户ID限拍一个1元礼包，且仅适用1次，多买无效；",
          "② 如拍下后，若未在活动期间成功支付商品，则视为自动放弃1元特权；",
          "③ 赠品将于购买商品确认收货后发出，如有问题可详询客服，实付金额不包括已使用的优惠券、购物津贴、拍下立减、折扣、红包、补贴、基金、五包费等费用；",
          "④ 若发生退款或退货行为，赠品将不予以发货；",
          "⑤ 礼包仅限天猫店（顾家家居官方旗舰店）使用。",
        ],
      }
    };
  },
  created() {
    this.getRules();
    if (this.isMobile()) {
      //手机端
      this.ismOrpc = "Moperation";
      // //设置rem
      // window.onload = function () {
      //   getRem(750, 100);
      // };
      // window.onresize = function () {
      //   getRem(750, 100);
      // };
      // function getRem(pwidth, prem) {
      //   var html = document.getElementsByTagName("html")[0];
      //   var oWidth =
      //     document.body.clientWidth || document.documentElement.clientWidth;
      //   html.style.fontSize = (oWidth / pwidth) * prem + "px";
      // }
    } else {
      //pc端
      this.ismOrpc = "PCoperation";
    }
  },
  methods: {
    //判断
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    getRules() {
      https.post("/api/EcAutoTools291/getDocument").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

