<template>
  <div class="container">
    <el-card>
      <img src="../../assets/logo_index.png" width="200px" alt />
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  position: absolute;
  left: 0;
  top: 0;
}
.el-card {
  width: 400px;
  height: 370px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
