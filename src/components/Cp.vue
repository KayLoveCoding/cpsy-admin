<template>
  <div class="cp-comp">
    <div class="cp container">
      <div class="query-box">
        <span class="brand">赛事</span>
        <div class="flex-s wrap">
          <div class="input-box">
            <p class="title">赛事名称:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <div class="input-box">
            <p class="title">赛事管理员:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <el-button class="btn" type="primary">查询</el-button>
        </div>
      </div>
      <div class="query-box main-list" v-for="i in 5" :key="i">
        <div class="flex-b">
          <div style="width:80px;" class="text-center">
            <el-checkbox class="check-box" v-model="checked"></el-checkbox>
          </div>
          <div class="main-info flex-s">
            <img
              class="main-img"
              src="https://goss3.vcg.com/creative/vcg/400/version23/VCG41589421510.jpg"
            >
            <div class="main-text">
              <p class="text-overflow">影赛类别：只公开中文</p>
              <p class="text-overflow">赛事名称：《沭阳全国花木摄影大展》</p>
              <p class="text-overflow">开始时间：2018-12-1</p>
              <p class="text-overflow">投稿截止时间：2019-1-20</p>
              <p class="text-overflow">评审截止时间：2019-1-30</p>
              <p class="text-overflow">结束时间：2019-2-1</p>
            </div>
          </div>
          <div class="btn-group-box">
            <el-button
              type="primary"
              plain
              style="width:98px;margin-top:10px;"
              @click="toPage('/editCp')"
            >编辑</el-button>
            <el-button type="info" plain @click="toPage('creator')">相关资讯</el-button>
            <el-button type="success" plain @click="exportModal">评审专家</el-button>
            <el-button type="warning" plain @click="authResult">评审结果</el-button>
            <el-button type="info">结果管理</el-button>
          </div>
        </div>
      </div>
      <div class="text-right pagenation">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
    <el-dialog title="评审专家" :visible.sync="showExportModal" width="850px">
      <div class="my-modal-container">
        <div class="query-box">
          <span class="brand">影赛活动：《沭阳全国花木摄影大展》——专家管理</span>
          <div class="group-btn">
            <el-button style type="primary" @click="addExportModal" round>增加</el-button>
            <el-button type="success" plain round>随机抽取专家</el-button>
          </div>
          <el-table
            ref="mainTable"
            :data="exportTable"
            tooltip-effect="dark"
            stripe
            border
            highlight-current-row
            height="260"
          >
            <el-table-column label="专家姓名">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column label="影赛类别">
              <template slot-scope="scope">{{ scope.row.type }}</template>
            </el-table-column>
            <el-table-column label="作品形式">
              <template slot-scope="scope">{{ scope.row.form }}</template>
            </el-table-column>
            <el-table-column label="拍摄工具">
              <template slot-scope="scope">{{ scope.row.tool }}</template>
            </el-table-column>
            <el-table-column label="评审数量限制">
              <template slot-scope="scope">{{ scope.row.limit }}</template>
            </el-table-column>
            <el-table-column label="是否评审">
              <template slot-scope="scope">
                <p v-text="scope.row.isAudit==1?'已开始':'未开始'"></p>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="danger" @click="confirm(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="评审结果" :visible.sync="showAuthResult" width="850px">
      <div class="my-modal-container">
        <div class="query-box">
          <span class="brand">赛事结果查询</span>
          <el-tabs type="border-card" tab-position="left" style="height:300px;margin-top:12px;">
            <el-tab-pane label="第一轮境内纪录">
              <p>赛事活动名称+轮次+评审制度</p>
              <el-table
                ref="mainTable"
                :data="vowTable"
                tooltip-effect="dark"
                style="margin-top:12px;"
                stripe
                border
                highlight-current-row
                height="260"
              >
                <el-table-column label="专家姓名">
                  <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column label="评审类别">
                  <template slot-scope="scope">{{ scope.row.type }}</template>
                </el-table-column>
                <el-table-column label="投票总数">
                  <template slot-scope="scope">{{ scope.row.total }}</template>
                </el-table-column>
                <el-table-column label="作品明细">
                  <template slot-scope="scope">{{ scope.row.detail }}</template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="第二轮境内纪录">第二轮境内纪录</el-tab-pane>
            <el-tab-pane label="第三轮境内纪录">第三轮境内纪录</el-tab-pane>
            <el-tab-pane label="境内记录类终评">境内记录类终评</el-tab-pane>
            <el-tab-pane label="境内记录类最终结果">境内记录类最终结果</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="添加专家" :visible.sync="showAddExportModal" width="600px">
      <div class="my-modal-container">
        <div class="flex-b">
          <div style="width:100%;">
            <div class="input-box flex-s">
              <div class="title">专家姓名:</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="input-box flex-s">
              <div class="title">影赛类别:</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="input-box flex-s">
              <div class="title">作品形式:</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="input-box flex-s">
              <div class="title">拍摄工具:</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="input-box flex-s">
              <div class="title">评审数量限制:</div>
              <el-input type="number" placeholder="请输入内容"></el-input>
            </div>
            <div class="input-box flex-s">
              <div class="title">是否参与评审:</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="text-center">
          <el-button type="primary" @click="showAddExportModal = false" class="btn">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import util from "@/util";
export default {
  data() {
    return {
      table: [],
      exportTable: [
        {
          name: "张丙锐",
          type: "中文",
          form: "组图",
          tool: "手机",
          limit: 150,
          isAudit: 1
        }
      ],
      vowTable: [
        {
          name: "张丙锐",
          type: "全部",
          total: 100,
          detail: "图片链接"
        }
      ],
      showAddModal: false,
      showAuthResult: false,
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
      checked: false,
      showExportModal: false,
      showAddExportModal: false
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
    exportModal() {
      this.showExportModal = true;
    },
    authResult() {
      this.showAuthResult = true;
    },
    addExportModal() {
      this.showAddExportModal = true;
    },
    confirm(row) {
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
    },
    toPage(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.cp-comp {
  .whole;
  overflow: auto;
  .el-dialog__body {
    padding: 0 20px;
  }
  .my-modal-container {
    box-sizing: border-box;
    padding-bottom: 20px;
    .el-select {
      width: 100%;
    }
  }
  .group-btn {
    margin-top: 12px;
    margin-bottom: 12px;
    .el-button {
      margin-right: 12px;
    }
  }
  .cp {
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
        width: 420px;
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
        width: calc(100% - 500px);
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
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    background: transparent !important;
  }
}
</style>