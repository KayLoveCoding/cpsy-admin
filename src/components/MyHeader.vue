<template>
  <div class="my-header-comp">
    <div class="w">
      <div class="my-header flex-b">
        <p class="logo">中国摄影家协会征稿评选系统</p>
        <div class="flex-e">
          <p class="username" v-text="'欢迎您:'+username"></p>
          <a class="exit-btn" href="javascript:;">退出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "娜子"
    };
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.my-header-comp {
  background: #555555;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 12px 20px;
  .my-header {
    height: 36px;
    p {
      color: #fff;
      line-height: 36px;
    }
    .logo{
        font-size: 20px;
    }
    .username {
      padding-right: 10px;
      border-right: 1px solid #999;
    }
    .exit-btn {
      margin-left: 10px;
      color: @orange;
      line-height: 36px;
    }
  }
}
</style>