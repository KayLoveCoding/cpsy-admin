<template>
  <div class="events-comp">
    <div class="events container">
      <div class="query-box">
        <span class="brand">特刊查询</span>
        <div class="flex-s wrap">
          <div class="input-box">
            <p class="title">标题:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <div class="input-box">
            <p class="title">作者:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <el-button class="btn" type="primary">查询</el-button>
        </div>
      </div>
      <div class="query-box main-list" v-for="i in 5" :key="i">
        <div class="flex-b">
          <div class="main-info flex-s">
            <img
              class="main-img"
              src="https://goss4.vcg.com/creative/vcg/400/new/VCG211200282618.jpg"
            >
            <div class="main-text">
              <p class="text-overflow">标题：《山林摄影大赛优秀作品》</p>
              <p class="text-overflow">作者：张丙锐</p>
              <p class="text-overflow">简介：</p>
              <p class="tri-text-overflow">蔚蓝色的绸缎包裹我们脚下的这颗星球数亿年，曼妙的奇特海洋生物在纯净深邃的大海的臂弯里快乐无忧，充满着无限美好遐想。而今随着摄影设备的完善，越来越多的水下摄影作品将这个奇妙的多彩世界呈现给大众。</p>
            </div>
          </div>
          <div class="btn-group-box">
            <div class="text-center">
                <el-button type="primary" style="width:98px;margin-top:10px;">编辑</el-button>
            </div>
            <div class="text-center"><el-button type="danger" style="width:98px;margin-top:10px;">删除</el-button></div>
          </div>
        </div>
      </div>
      <div class="text-right pagenation">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
      showAddModal: false,
      mainChosen: [],
      options: [
        {
          value: "01",
          label: "审核通过"
        },
        {
          value: "02",
          label: "未审核"
        },
        {
          value: "03",
          label: "已拒绝"
        }
      ],
      value: "",
      radio: "1",
      checked: false
    };
  },
  created() {
    document.title = "影赛管理";
    this.init();
  },
  methods: {
    init() {
      this.table = [
        {
          id: "01",
          username: "娜子",
          name: "马丽娜",
          phone: "13641077122",
          email: "kaycoding@126.com",
          status: 1,
          startTime: util.transDate(new Date()),
          authTime: util.transDate(new Date())
        }
      ];
      this.authTable = [
        {
          id: "02",
          username: "娜子2",
          name: "马丽娜2",
          phone: "13641077122",
          email: "kaycoding@126.com"
        },
        {
          id: "03",
          username: "娜子3",
          name: "马丽娜3",
          phone: "13641077122",
          email: "kaycoding@126.com"
        }
      ];
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
    addModal() {
      this.showAddModal = true;
    },
    confirm() {
      if (this.mainChosen.length > 0) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      } else {
        this.$message({
          type: "warning",
          message: "您未选择数据"
        });
      }
    },
    toPage(path){
        this.$router.push({path})
    }
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.events-comp {
  .whole;
  overflow: auto;
  .el-dialog__body {
    padding: 0 20px;
  }
  .events {
    .input-box {
      .title {
        width: 120px;
      }
    }
    .main-list {
      cursor: pointer;
    //   height: 286px;
      .btn-group-box {
        box-sizing: border-box;
        padding: 0 20px;
        width: 150px;
        text-align: center;
        .el-button {
          margin-bottom: 10px;
        }
      }
      .check-box {
        width: 30px;
        font-size: 30px;
        span {
          display: inline-block;
          width: 30px;
          height: 30px;
          font-size: 30px;
        }
      }
      .el-checkbox__inner::after {
        height: 20px;
        left: 13px;
      }
      .main-info {
        width: calc(100% - 160px);
        border-left: 1px dashed #eee;
        border-right: 1px dashed #eee;
        height: 150px;
        .main-img {
          width: 300px;
          height: 150px;
          margin-right: 30px;
          margin-left: 30px;
        }
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