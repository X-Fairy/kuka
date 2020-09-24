<template>
<div class="mobile-content">   
    <img alt="宣传图" src="../assets/img/banner.png" class="banner" />
    <div class="content-in">
        <div class="search-in"></div>
        <div class="null-box"></div>
        <div class="active-instructions">
            <div class="active-title">活动说明</div>
            <div class="active-rules">
                购买1元礼包且10.1日0-2点实付满2千元即可送乳胶枕一个
                活动细则：
                ① 9.22-9.30日活动期间每个用户ID限拍一个1元礼包，且仅适用1次，多买无效；
                ② 如拍下后，若未在活动期间成功支付商品，则视为自动放弃1元特权；
                ③ 赠品将于购买商品确认收货后发出，如有问题可详询客服，实付金额不包括已使用的优惠券、购物津贴、拍下立减、折扣、红包、补贴、基金、五包费等费用；
                ④ 若发生退款或退货行为，赠品将不予以发货；
                ⑤ 礼包仅限天猫店（顾家家居官方旗舰店）使用。
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style  scoped>

.mobile-content{
    width: 100%;
    height: 100%;
}
.header-title{
    width: 100%;
    text-align: center;
}
.banner{
    width: 100%;
    height: 135px;
    display: block;
    margin-top: 10px;
}
.content-in{
  width: 100%;
  height: auto;
  background-color:  #B41C2C; 
  padding-bottom: 30px;
  position: relative;
}
.search-in{
    width: 90%;
    height: 40px;
    position: absolute;
    top: -30px;
    left: 5%;
    background-color: #ffffff;
    
}
.null-box{
    width: 100%;
    height: 28px;
}
/* 活动数名 */
.active-instructions{
    width: 90%;
    /* height: 384px; */
    background: #CE3131;
    border: 2px solid #EE6057;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 auto ;
    padding-top: 28px;
    color: #FFE2B7;
}
.active-title{
    font-size: 20px;

}
.active-rules{
    font-size: 14px;
    line-height: 22px;
    

}
</style>