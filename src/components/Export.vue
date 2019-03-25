<template>
  <div class="export-comp">
    <div class="export container">
      <div class="query-box">
        <span class="brand">用户查询</span>
        <div class="flex-s wrap">
          <div class="input-box">
            <p class="title">审核状态:</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="input-box">
            <p class="title">用户名:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <div class="input-box">
            <p class="title">姓名:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <el-button class="btn" type="primary">查询</el-button>
        </div>
      </div>
      <div class="tool-box">
        <el-button class="btn" type="primary" @click="addModal" round>增加</el-button>
        <el-button class="btn" type="danger" @click="confirm" round>删除</el-button>
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
          <el-table-column label="用户名" width="120">
            <template slot-scope="scope">{{ scope.row.username }}</template>
          </el-table-column>
          <el-table-column label="姓名" width="120">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column label="电话" width="120">
            <template slot-scope="scope">{{ scope.row.phone }}</template>
          </el-table-column>
          <el-table-column label="邮箱">
            <template slot-scope="scope">{{ scope.row.email }}</template>
          </el-table-column>
          <el-table-column label="状态" width="120">
            <template slot-scope="scope">
              <p class="text-center" v-text="scope.row.status==0?'未审核':'审核通过'"></p>
            </template>
          </el-table-column>
          <el-table-column label="注册时间">
            <template slot-scope="scope">{{ scope.row.startTime }}</template>
          </el-table-column>
          <el-table-column label="审核时间">
            <template slot-scope="scope">{{ scope.row.authTime }}</template>
          </el-table-column>
        </el-table>
        <el-pagination class="pagenation" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
    <el-dialog title="添加用户" :visible.sync="showAddModal" width="600px">
      <div class="my-modal-container">
        <div class="query-box">用户属性：专家评委</div>
        <div class="input-box flex-s">
          <div class="title">账号:</div>
          <el-input placeholder="请输入内容"></el-input>
        </div>
        <div class="input-box flex-s">
          <div class="title">密码:</div>
          <el-input type="password" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-box flex-s">
          <div class="title">确认密码:</div>
          <el-input type="password" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-box flex-s">
          <div class="title">姓名:</div>
          <el-input placeholder="请输入内容"></el-input>
        </div>
        <div class="input-box flex-s">
          <div class="title">性别:</div>
          <div class="flex-s w-100">
              <el-radio style="margin-right:30px;" v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </div>
        </div>
        <div class="input-box flex-s">
          <div class="title">电话:</div>
          <el-input type="tel" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-box flex-s">
          <div class="title">邮箱:</div>
          <el-input type="text" placeholder="请输入内容"></el-input>
        </div>
        <div class="text-center">
          <el-button type="primary" @click="showAddModal = false" class="btn">注册</el-button>
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
      radio:'1'
    };
  },
  created() {
    document.title = "专家管理";
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
    }
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.export-comp {
  .whole;
  overflow: auto;
  .el-dialog__body {
    padding: 0 20px;
  }
  .export {
      .input-box{
          width: 28%;
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