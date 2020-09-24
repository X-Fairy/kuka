<template>
  <div class="home" style="width: 684px; margin: auto">
    <p class="header-title">顾家家居——中奖详情</p>
    <img alt="宣传图" src="../assets/img/banner.png" class="banner" />
    <p class="">获奖详情</p>
    <div class="search">
      <el-input
        v-model="inputValue"
        clearable
        placeholder="请输入你的旺旺号或订单编号"
      ></el-input>
      <el-button class="btn" @click="search">查询</el-button>
    </div>
    <div class="content">
      <p class="tip">恭喜你中奖了！</p>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :header-cell-style="{ background: '#F7F7F7' }"
      >
        <el-table-column prop="id" label="中奖ID" width="130">
        </el-table-column>
        <el-table-column prop="date" label="活动时间" width="211">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="171">
        </el-table-column>
        <el-table-column prop="detail" label="奖品" width="171">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import https from "../components/http";
export default {
  data() {
    return {
      inputValue: "",
      tableData: [
        {
          id: "1234654613",
          date: "2020-6-1至2020-6-3",
          title: "双十一大促",
          detail: "抱枕",
        },
        {
          id: "1234654613",
          date: "2020-6-1至2020-6-3",
          title: "双十一大促",
          detail: "抱枕",
        },
      ],
    };
  },
  methods: {
    search() {
      let params={
        winIdOrOrderNo:this.inputValue
      }
      https.get("/EcAutoTools291/awardInfo", params)
        .then((res) => {
          console.log(res)
        });
     
    },
  },
};
</script>
<style  scoped>
.header-title {
  font-size: 20px;
  margin-bottom: 20px;
}
.banner {
  width: 684px;
  height: 216px;
}

.title {
  font-size: 26px;
  margin-bottom: 12px;
}
.search {
  width: 684px;
  height: 40px;
  display: flex;
  margin: auto;
}
input {
  width: 644px;
}
.search /deep/ .el-input__inner {
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
.content .tip {
  font-size: 14px;
  line-height: 22px;
  color: #fb5353;
}
</style>
