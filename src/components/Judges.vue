<template>
  <div class="judges-comp">
    <div class="judges container">
      <div class="query-box">
        <span class="brand">影赛评委</span>
        <div class="flex-s wrap">
          <div class="input-box">
            <p class="title">评委姓名:</p>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <el-button class="btn" type="primary">查询</el-button>
        </div>
      </div>
      <div class="tool-box">
        <el-button class="btn" type="primary" @click="addModal" round>添加评委</el-button>
      </div>
      <div class="query-box main-list" >
        <div class="flex-b">
          <div class="main-info flex-s">
            <img
              class="main-img"
              src="https://goss3.vcg.com/creative/vcg/400/version23/VCG21gic13915590.jpg"
            >
            <div class="main-text" v-if="!isEdit">
              <p class="text-overflow">序号：1</p>
              <p class="text-overflow">姓名：测试人员</p>
              <p class="text-overflow">简介：</p>
              <p class="tri-text-overflow">测试中国摄影家协会秘书长</p>
            </div>
            <div class="main-text" v-else>
             <div class="input-box flex-s">
                <div class="title">序号:</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
             <div class="input-box flex-s">
                <div class="title">姓名:</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
             <div class="input-box flex-s">
                <div class="title">简介:</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
            </div>
          </div>
          <div class="btn-group-box">
            <div class="text-center">
              <el-button type="primary" style="width:98px;margin-top:10px;" @click="isEdit=!isEdit">编辑</el-button>
            </div>
            <div class="text-center">
              <el-button type="danger" style="width:98px;margin-top:10px;" @click="confirm">删除</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right pagenation">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
    <el-dialog title="添加评委" :visible.sync="showAddModal" width="600px">
      <div class="my-modal-container">
        <div class="query-box">
          <div class="flex-a">
            <div class="uploader-box">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div>
              <div class="input-box flex-s">
                <div class="title">序号:</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box flex-s">
                <div class="title">名称:</div>
                <el-input type="password" placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box flex-s">
                <div class="title">简介额:</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
            </div>
          </div>
          <div class="text-center">
            <el-button style="width:100px;margin-right:20px;" type="primary" @click="showAddModal = false" class="btn">保存</el-button>
            <el-button style="width:100px;" @click="showAddModal = false" class="btn">取消</el-button>
          </div>
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
      imageUrl: false,
      showAddModal: false,
      isEdit:false,
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
    document.title = "影赛评委";
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
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.judges-comp {
  .whole;
  overflow: auto;
  .el-dialog__body {
    padding: 0 20px;
  }
  .judges {
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
          width: 250px;
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
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-dialog__body{
      box-sizing: border-box;
      padding-bottom: 20px;
      .query-box{
          box-sizing: border-box;
          padding: 20px 0 12px;
      }
  }
  .main-text{
      .input-box{
          width: 100%;
      }
  }
}
</style>