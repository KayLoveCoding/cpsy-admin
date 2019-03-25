<template>
  <div class="audit-comp">
    <div class="audit container">
      <p>评审规则管理：</p>
      <p
        style="text-indent: 2rem;margin-top:12px;margin-bottom:12px;"
      >平台管理员可在此模块设置平台内可用的评审规则。活动管理员在创建赛事活动、选择赛事评审规则时只可选择平台管理员在此模块启用的规则。</p>
    </div>
    <div style="background:#f5f5f5;">
        <div style="width:90%;margin:0 auto;box-sizing:border-box;padding:40px 20px;">
          <div style="margin-top:12px;margin-bottom:6px;">
            <el-radio v-model="radio" label="1">投票制</el-radio>
            <div style="margin-top:6px;margin-bottom:6px;">
              <p>规则说明：</p>
              <p
                style="text-indent: 2rem;margin-top:6px;margin-bottom:6px;"
              >赛事评审选择投票制时，评委可对自身评审范围内的全部参赛作品进行投票，每轮赛事结束将按作品得票总数进行入围作品筛选；</p>
            </div>
          </div>
          <div style="margin-top:12px;margin-bottom:6px;">
            <el-radio v-model="radio" label="2">抽取制</el-radio>
            <div style="margin-top:6px;margin-bottom:6px;">
              <p>规则说明：</p>
              <p
                style="text-indent: 2rem;margin-top:6px;margin-bottom:6px;"
              >评委可根据活动管理员分配的赛事评审权限，对可投票作品进行投票抽取。单幅作品只可被投票一次。</p>
            </div>
          </div>
          <div style="margin-top:12px;margin-bottom:6px;">
            <el-radio v-model="radio" label="3">打分制</el-radio>
            <div style="margin-top:6px;margin-bottom:6px;">
              <p>规则说明：</p>
              <p
                style="text-indent: 2rem;margin-top:6px;margin-bottom:6px;"
              >评分制不可单独使用，需匹配投票制或抽取制。当赛事评审完成已筛选出最终作品后，系统可根据预设评分规则自动核算作品得分总数；</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import util from "@/util";
export default {
  data() {
    return {
      radio: "1"
    };
  },
  created() {
    document.title = "评审设置";
  },
  methods: {}
};
</script>

<style lang="less">
@import "../assets/less/common";
.audit-comp {
  .whole;
  overflow: auto;
  .audit {
  }
}
</style>