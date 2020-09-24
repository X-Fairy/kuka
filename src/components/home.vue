<template>
  <div class="home">
      <component :is="ismOrpc"/>
  </div>
</template>

<script>
import PCoperation from "@/components/PCoperation";
import Moperation from "@/components/Moperation";
export default {
  components: {
    PCoperation,
    Moperation
  },
  data() {
    return {
      ismOrpc:'PCoperation'     
    };
  },
  created() {
    if (this.isMobile()) {
      //手机端
      this.ismOrpc = "Moperation";
      //设置rem
      window.onload = function () {
        getRem(750, 100);
      };
      window.onresize = function () {
        getRem(750, 100);
      };
      function getRem(pwidth, prem) {
        var html = document.getElementsByTagName("html")[0];
        var oWidth =
          document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = (oWidth / pwidth) * prem + "px";
      }
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
      console.log(flag)
      return flag;
    },
  },
};
</script>

