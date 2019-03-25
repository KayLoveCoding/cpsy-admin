<template>
  <div class="creator-comp">
    <div class="creator container">
      <div class="query-box">
        <span class="brand">资讯查询</span>
        <div class="flex-s wrap">
          <div class="input-box">
            <p class="title">活动名称:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <div class="input-box">
            <p class="title">活动管理员姓名:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <el-button class="btn" type="primary">查询</el-button>
        </div>
      </div>
      <div class="tool-box">
        <el-button class="btn" type="primary" round>增加</el-button>
        <el-button class="btn" type="success" plain  round>发布</el-button>
        <el-button class="btn" type="danger" plain round>撤销</el-button>
         <el-button class="btn" type="warning"  round>编辑</el-button>
         <el-button class="btn" type="danger"  round>删除</el-button>
      </div>
      <div class="table-container">
        <el-table
          ref="mainTable"
          :data="table"
          tooltip-effect="dark"
          stripe
          border
          highlight-current-row
          @row-click="toggleSelection"
          @selection-change="getChosen"
          height="320"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="标题" >
            <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>
          <el-table-column label="发布时间" >
            <template slot-scope="scope">{{ scope.row.publishTime }}</template>
          </el-table-column>
          <el-table-column label="发布状态" >
            <template slot-scope="scope">{{ scope.row.status }}</template>
          </el-table-column>
        </el-table>
        <el-pagination class="pagenation" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import util from "@/util";
export default {
  data() {
    return {
      table: [],
      mainChosen: [],
      value: "",
    };
  },
  created() {
    document.title = "资讯管理";
    this.init();
  },
  methods: {
    init() {
    },
    getChosen(val) {
      console.log(val);
      this.mainChosen = val;
    },
    toggleSelection(row) {
      console.log(row);
      if (row) {
        this.$refs.mainTable.toggleRowSelection(row);
      } else {
        this.$refs.mainTable.clearSelection();
      }
    },
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.creator-comp {
  .whole;
  overflow: auto;
  .el-dialog__body {
    padding: 0 20px;
  }
  .creator {
    .input-box {
      .title {
        width: 120px;
      }
    }
    .el-table {
      thead {
        tr {
          th {
            background: #666;
            cursor: auto;
            color: #fff;
          }
        }
      }
      .current-row {
        td {
          background-color: #e3efff !important;
        }
      }
      .cell {
        text-align: center;
      }
    }
  }
}
</style>