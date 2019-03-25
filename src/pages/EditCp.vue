<template>
  <div class="edit-cp-page">
    <my-header></my-header>
    <div class="edit-cp container">
      <el-tabs v-model="languageTab" @tab-click="changeLanguageTab">
        <el-tab-pane label="中文" name="chinese">
          <div class="query-box">
            <span class="brand">影赛介绍</span>
            <div class="flex-s wrap">
              <div class="input-box">
                <p class="title">影赛序号:</p>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box">
                <p class="title">影赛名称:</p>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box">
                <p class="title">影赛简称:</p>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box">
                <p class="title">影赛类别:</p>
                <div class="flex-s w-100">
                  <el-radio style="margin-right:30px;" v-model="radio" label="1">中文</el-radio>
                  <el-radio v-model="radio" label="2">双语</el-radio>
                </div>
              </div>
              <div class="input-box">
                <p class="title">开始日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <div class="input-box">
                <p class="title">投稿截止日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <div class="input-box">
                <p class="title">评审截止日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <div class="input-box">
                <p class="title">结束日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
            </div>
            <p style="margin-top:20px;margin-bottom:12px;">影赛简介</p>
            <quill-editor ref="myTextEditor1" v-model="content1"></quill-editor>
          </div>
          <div class="query-box" style="margin-top:20px;">
            <span class="brand">征稿要求</span>
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="征稿启事" name="first">
                <div class="container">
                  <div class="flex-s wrap">
                    <div class="input-box">
                      <p class="title">显示指导老师:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">中文</el-radio>
                        <el-radio v-model="radio" label="2">双语</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">作品形式:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">单幅</el-radio>
                        <el-radio v-model="radio" label="2">组图</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">组图数量:</p>
                      <div class="flex-c">
                        <el-input></el-input>至
                        <el-input></el-input>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">上传件数:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">作品颜色:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">单图大小:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">拍摄工具:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">分类:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">付费作品单价:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <p style="margin-top:20px;margin-bottom:12px;">征稿启事</p>
                  <quill-editor ref="myTextEditor2" v-model="content2"></quill-editor>
                </div>
              </el-tab-pane>
              <el-tab-pane label="入围作品数量与稿酬" name="second">
                <div class="container">
                  <div class="flex-s wrap">
                    <div class="input-box">
                      <p class="title">显示指导老师:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">中文</el-radio>
                        <el-radio v-model="radio" label="2">双语</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">作品形式:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">单幅</el-radio>
                        <el-radio v-model="radio" label="2">组图</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">组图数量:</p>
                      <div class="flex-c">
                        <el-input></el-input>至
                        <el-input></el-input>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">上传件数:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">作品颜色:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">单图大小:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">拍摄工具:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">分类:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">付费作品单价:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <p style="margin-top:20px;margin-bottom:12px;">征稿启事</p>
                  <quill-editor ref="myTextEditor3" v-model="content3"></quill-editor>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="query-box" style="margin-top:20px;">
            <span class="brand">赛事图片</span>
            <el-tabs tab-position="left" v-model="activeName2" type="card" style="margin-top:20px;">
              <el-tab-pane label="我要参赛" name="1">
                <img
                  class="tab-img"
                  src="https://goss3.vcg.com/cms/image/image/e2a967cf7cc240ca8c69da28d741db08.jpg"
                  alt
                >
              </el-tab-pane>
              <el-tab-pane label="赛事详情" name="2">
                <img
                  class="tab-img"
                  src="https://goss.vcg.com/cms/image/image/73aedb86fbcc4aa095c7164ee0649b87.png"
                  alt
                >
              </el-tab-pane>
              <el-tab-pane label="往期赛事" name="3">
                <img
                  class="tab-img"
                  src="https://goss2.vcg.com/cms/image/image/5ca031d857674aa98dd4939eb671f7f4.jpg"
                  alt
                >
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane label="英文" name="english">
          <div class="query-box">
            <span class="brand">影赛介绍</span>
            <div class="flex-s wrap">
              <div class="input-box">
                <p class="title">影赛序号:</p>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box">
                <p class="title">影赛名称:</p>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box">
                <p class="title">影赛简称:</p>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="input-box">
                <p class="title">影赛类别:</p>
                <div class="flex-s w-100">
                  <el-radio style="margin-right:30px;" v-model="radio" label="1">中文</el-radio>
                  <el-radio v-model="radio" label="2">双语</el-radio>
                </div>
              </div>
              <div class="input-box">
                <p class="title">开始日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <div class="input-box">
                <p class="title">投稿截止日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <div class="input-box">
                <p class="title">评审截止日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <div class="input-box">
                <p class="title">结束日期:</p>
                <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
              </div>
            </div>
            <p style="margin-top:20px;margin-bottom:12px;">影赛简介</p>
            <quill-editor ref="myTextEditor1" v-model="content1"></quill-editor>
          </div>
          <div class="query-box" style="margin-top:20px;">
            <span class="brand">征稿要求</span>
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="征稿启事" name="first">
                <div class="container">
                  <div class="flex-s wrap">
                    <div class="input-box">
                      <p class="title">显示指导老师:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">中文</el-radio>
                        <el-radio v-model="radio" label="2">双语</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">作品形式:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">单幅</el-radio>
                        <el-radio v-model="radio" label="2">组图</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">组图数量:</p>
                      <div class="flex-c">
                        <el-input></el-input>至
                        <el-input></el-input>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">上传件数:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">作品颜色:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">单图大小:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">拍摄工具:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">分类:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">付费作品单价:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <p style="margin-top:20px;margin-bottom:12px;">征稿启事</p>
                  <quill-editor ref="myTextEditor2" v-model="content2"></quill-editor>
                </div>
              </el-tab-pane>
              <el-tab-pane label="入围作品数量与稿酬" name="second">
                <div class="container">
                  <div class="flex-s wrap">
                    <div class="input-box">
                      <p class="title">显示指导老师:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">中文</el-radio>
                        <el-radio v-model="radio" label="2">双语</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">作品形式:</p>
                      <div class="flex-s w-100">
                        <el-radio style="margin-right:30px;" v-model="radio" label="1">单幅</el-radio>
                        <el-radio v-model="radio" label="2">组图</el-radio>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">组图数量:</p>
                      <div class="flex-c">
                        <el-input></el-input>至
                        <el-input></el-input>
                      </div>
                    </div>
                    <div class="input-box">
                      <p class="title">上传件数:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">作品颜色:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">单图大小:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">拍摄工具:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">分类:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="input-box">
                      <p class="title">付费作品单价:</p>
                      <el-input placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <p style="margin-top:20px;margin-bottom:12px;">征稿启事</p>
                  <quill-editor ref="myTextEditor3" v-model="content3"></quill-editor>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="query-box" style="margin-top:20px;">
            <span class="brand">赛事图片</span>
            <el-tabs tab-position="left" v-model="activeName2" type="card" style="margin-top:20px;">
              <el-tab-pane label="我要参赛" name="1">
                <img
                  class="tab-img"
                  src="https://goss3.vcg.com/cms/image/image/e2a967cf7cc240ca8c69da28d741db08.jpg"
                  alt
                >
              </el-tab-pane>
              <el-tab-pane label="赛事详情" name="2">
                <img
                  class="tab-img"
                  src="https://goss.vcg.com/cms/image/image/73aedb86fbcc4aa095c7164ee0649b87.png"
                  alt
                >
              </el-tab-pane>
              <el-tab-pane label="往期赛事" name="3">
                <img
                  class="tab-img"
                  src="https://goss2.vcg.com/cms/image/image/5ca031d857674aa98dd4939eb671f7f4.jpg"
                  alt
                >
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import util from "@/util";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
export default {
  data() {
    return {
      languageTab: "chinese",
      value: "",
      radio: "1",
      content1: "",
      content2: "",
      content3: "",
      activeName: "first",
      activeName2: "1"
    };
  },
  components: {
    MyHeader,
    MyFooter
  },
  created() {
    document.title = "影赛管理->影赛编辑";
  },
  methods: {
    changeLanguageTab(tab, event) {}
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.edit-cp-page {
  .el-date-editor {
    width: 100%;
  }
  .query-box {
    width: 98%;
    margin: 20px auto;
  }
  .tab-img {
    width: 100%;
    height: 200px;
  }
  .edit-cp {
  }
}
</style>