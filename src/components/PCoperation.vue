<template>
  <div class="home" style="width: 684px; margin: auto;margin-top:16px;">
    <p class="header-title">顾家家居——中奖详情</p>
    <img alt="宣传图" src="../assets/img/banner.png" class="banner" />
    <p class="title">获奖详情</p>
    <div class="search">
      <el-input
        focus
        v-model="inputValue"
        clearable
        placeholder="请输入你的旺旺号或订单编号"
      ></el-input>
      <!-- <el-autocomplete
        class="inline-input"
        autofocus="true"
        v-model="inputValue"
        :fetch-suggestions="querySearch"
        placeholder="请输入你的旺旺号或订单编号"
        @select="handleSelect"
        @keyup.enter.native="search"
      ></el-autocomplete> -->
      <el-button class="btn" @click="search">查询</el-button>
    </div>

    <div class="content">
      <div class="active-instructions">
        <div class="active-rules">
          <div class="rules-reward">{{ rulesObj.reward }}</div>
          <div class="rules-remark">{{ rulesObj.remark }}</div>
          <div
            class="rules-list"
            v-for="(it, index) in rulesObj.rulesData"
            :key="index"
          >
            {{ it }}
          </div>
        </div>
      </div>
      <p class="tip" v-if="tips">{{ tips }}</p>
    </div>
    <div class="table" v-if="tableData" style="margin-top:20px;">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{ background: '#F7F7F7' }"
      >
        <el-table-column prop="winid" label="中奖ID" width="130">
        </el-table-column>
        <el-table-column prop="date" label="活动时间" width="211">
        </el-table-column>
        <el-table-column prop="activityTitle" label="标题" width="171">
        </el-table-column>
        <el-table-column prop="activityPrizes" label="奖品" width="171">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import https from "../components/http";
export default {
  name: "PCoperation",
  props: {
    rulesObj: {
      type: Object,
      default: ()=>{
        return {}
      },
    },
  },
  data() {
    return {
      inputValue: "",
      restaurants: [],
      tableData: null,
      tips: null,
    };
  },
  methods: {
    search() {
      this.tableData = null;
      let params = {
        winIdOrOrderNo: this.inputValue,
      };
      https.get("/api/EcAutoTools291/awardInfo", params).then((res) => {
        if (res.data) {
          if (res.data.length == 0) {
            this.tips = "很遗憾，未中奖";
            return;
          }
          this.tableData = res.data;
          this.tableData.forEach((ele) => {
            console.log(ele.activityTime.substring(0, 11));
            ele.date =
              ele.activityTime.substring(0, 10) +
              "至" +
              ele.endTime.substring(0, 10);
          });
          this.tips = "恭喜你中奖了！";
        } else {
          if (res.code == 1) this.tips = res.msg;
        }
      });
    },
  },
};
</script>
<style  scoped>
.header-title {
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 550;
}
.banner {
  width: 684px;
  height: 216px;
}

.title {
  font-size: 26px;
  margin:40px 0 12px;
  font-weight: 550;
}
.search {
  width: 684px;
  height: 40px;
  display: flex;
  margin: auto;
}

.search /deep/ .el-input__inner {
  width: 610px;
  border: 1px solid #e42727;
  box-sizing: border-box;
  border-radius: 4px 0 0 4px;
  padding: 0;
  padding-left: 12px;
  background: #fff5f5;
}

.btn {
  width: 83px;
  background: #e42727;
  color: #ffffff;
  font-size: 14px;

  border-radius: 0;
  border: 1px solid #e42727;
}
.content{
  margin-top: 16px;
}
.content .tip{
  font-size: 14px;
  line-height: 22px;
  color: #fb5353;
  font-weight: 550;
  margin-top: 20px;
}
/* 活动规则 */
.active-rules {
  color: #737373;
  font-size: 12px;
  line-height: 22px;
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
</style>
