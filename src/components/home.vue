<template>
  <div class="home">
    <component :is="ismOrpc" :rulesObj="rulesObj" :banner="banner"/>
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
      banner:'',
      rulesObj: {
        title: "活动说明",
        reward: "购买1元礼包且10.1日0-2点实付满2千元即可送乳胶枕一个",
        remark: "活动细则：",
        rulesData: [],
      },
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
      https.post("/EcAutoTools/getDocument").then((res) => {
        this.rulesObj.rulesData = res.data[0].kukaAward.cpoyWriter.split("\n");
        for (let i = 0; i < this.rulesObj.rulesData.length; i++) {
          this.rulesObj.rulesData[i]=this.rulesObj.rulesData[i].substring(0,this.rulesObj.rulesData[i].length-3);
        }
        this.banner= res.data[0].filePath
        console.log(this.banner)
      });
    },
  },
};
</script>

