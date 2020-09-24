<template>
<div class="mobile-content">
    <p class="header-title">顾家家居——中奖详情</p>
    <img alt="宣传图" src="../assets/img/banner.png" class="banner" />
    <div class="content-in">
        <div class="search-out">
            <div class="search-in">
                <i class="el-icon-search search-self"></i>
                <el-autocomplete
        class="inline-input"
        v-model="inputValue"
        :fetch-suggestions="querySearch"
        placeholder="请输入你的旺旺号或订单编号"
        @select="handleSelect"
      ></el-autocomplete>
                <!-- <el-input class="search-input" v-model="inputValue" clearable placeholder="请输入你的旺旺号或订单编号" ></el-input> -->
                <div class="search-bt" >查询</div>
            </div>
        </div>
        <div class="null-box"></div>
        <div class="active-instructions">
            <div class="active-title">
                <div class="cir"></div>
                活动说明
                <div class="cir"></div>
            </div>
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
        inputValue:"",
        restaurants: [],
        rulesData:[""]
    };
  },
  methods: {
      querySearch(queryString, cb) {     
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      console.log(results);
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  }
};
</script>
<style   scoped>

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

/* 搜索开始 */
.search-out{
    width: 90%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: -30px;
    left: 5%;
    background-color: #ffffff;
    border-radius: 5px;
}
.search-in{
    width: 100%;
    height: 100%;
    text-align: left;
    border-radius: 5px;
    background-color: #E42727;
    position: relative;
    overflow: hidden;
}
.search-self{
    color: #B2B2B2;
    font-size: 14px;
    text-align: left;
    display: inline-block;
    position: absolute;
    left: 2%;
    line-height: 40px;
    z-index: 100;
}
.inline-input{
    width: 79%; 
}
.search-in /deep/ .el-input {
    width: 100%;
}
.search-in /deep/ .el-input__inner {
  border: 1px solid #e42727;
  box-sizing: border-box;
  border-radius: 4px 0 0 4px;
  padding: 0;
  padding-left: 25px;
  background: #fff5f5;
}
.search-bt{
    width: 19%;
    text-align: center; 
    display: inline-block;
    background-color: #E42727;
    font-size: 14px;
    color: #ffffff;
}
/* 搜索结束 */

.null-box{
    width: 100%;
    height: 30px;
}
/* 活动数名 */
.active-instructions{
    width: 90%;
    background: #CE3131;
    border: 2px solid #EE6057;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 auto ;
    color: #FFE2B7;
}
.active-title{
    font-size: 20px;
    text-align: center;
    margin-top: 22px;
    margin-bottom: 16px;
}
.active-rules{
    font-size: 14px;
    line-height: 22px;
}
.cir{
    width: 6px;
    height: 6px;
    background: #FFEDAB;
    border-radius: 50%;
    display: inline-block;
}
</style>
