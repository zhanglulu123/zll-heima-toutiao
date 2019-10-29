<template>
  <!-- <div class="container-article">我是Article</div> -->
  <el-card>
    <div slot="header">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      </el-breadcrumb>-->
      <my-bread>内容管理</my-bread>
    </div>
    <el-form lable-width="80px" size="small">
      <el-form-item label="状态">
        <el-radio-group v-model="reqParams.status">
          <el-radio :label="null">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
        <el-select v-model="reqParams.channel_id" placeholder="请选择">
          <el-option
            v-for="item in channelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model=" dataArr"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-button type="primary">筛选</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 筛选参数
      // 使用axios提交数据时候  如果数据的值为null是不会提交该字段
      reqParams: {
        status: null,
        channel_id: null
      },
      channelOptions: [{
        value: '选项1',
        label: 'java'
      }, {
        value: '选项2',
        label: '前端课程'
      }],
      dataArr: []

    }
  }
}
</script>

<style scoped lang='less'></style>
