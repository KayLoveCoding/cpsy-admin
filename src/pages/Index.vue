<template>
  <div class="index-page">
    <div class="index">
      <my-header></my-header>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item,index) in tabList"
          :key="'tab'+index"
          :label="item.name"
          :name="item.to"
        >
          <router-view class="main"></router-view>
        </el-tab-pane>
      </el-tabs>

      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
export default {
  data() {
    return {
      activeName: "/",
      tabList: [
        { name: "用户管理", to: "/" },
        { name: "专家管理", to: "export" },
        { name: "授权管理 ", to: "auth" },
        { name: "影赛管理", to: "cp" },
        { name: "资讯管理", to: "creator" },
        { name: "赛事特刊管理", to: "events" },
        { name: "作品管理", to: "works" },
        { name: "首页管理", to: "home" },
        { name: "影赛评委", to: "judges" },
        { name: "评审管理", to: "audit" },
      ]
    };
  },
  components: {
    MyHeader,
    MyFooter
  },
  watch: {
    $route: {
      handler(val) {
        if (val.name == "user") {
          this.activeName = "/";
          this.$router.push({ path: "/" });
        } else {
          this.activeName = val.name;
          this.$router.push({ path: val.name });
        }
      },
      deep: true
    }
  },
  created() {
    if (this.$route.name == "user") {
      this.activeName = "/";
      this.$router.push({ path: "/" });
    } else {
      this.activeName = this.$route.name;
      this.$router.push({ path: this.$route.name });
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab.name);
      this.$router.push({ path: tab.name });
    }
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.index-page {
  .whole;
  .index {
    .whole;
    .el-tabs {
      min-height: calc(100% - 100px);
      width: 100%;
    }
    .el-tabs__header {
      box-sizing: border-box;
      padding: 12px 20px 0;
      background: #f5f5f5;
    }
    .el-tabs__active-bar {
      background: linear-gradient(to right, @l-orange, @orange, @l-orange);
    }
    .el-tabs__item {
      font-size: 16px;
    }
    .el-tabs__item.is-active {
      color: @orange;
      &:link,
      &:visited,
      &:hover,
      &:active,
      &:focus {
        color: @orange;
      }
    }
  }
}
</style>