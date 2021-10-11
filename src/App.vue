<template>
  <el-container>

   <!-- <div style="text-align: center;"> <img src="@/assets/images/head.png" style="margin:0px 0 0px 0%; " width="97%" border="0"></div>-->

    <el-header>
      <div style="max-height: 100%">
        <el-menu
            :default-active="this.$route.path"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
          <el-menu-item index="/Index">首页</el-menu-item>
          <el-menu-item index="/MachineAnnotionImages">标注评判</el-menu-item>
          <el-menu-item index="/HumanAnnotionImages">人工标注</el-menu-item>
          <el-menu-item index="/AutoAnnotion">自动标注</el-menu-item>
          <el-menu-item index="/SpecialistDataBank">专家资料库</el-menu-item>
        </el-menu>

      </div>

    </el-header>

    <div class="bannerbox">
      <div class="banner">

        <img src='@/assets/images/banner1.png' class="banner">
      </div>
    </div>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>


<script>


export default {

  data() {
    return {
    }
  }
};
</script>



<style scoped lang="scss">
/*@media screen and (max-width:1000px){
  .el-menu-item {
    padding: 0 5px;
    font-size: 14px;
  }


}

@media screen and (min-width:1001px){
  .el-menu-item {
    padding: 0 20px;
    font-size: 14px;
  }


}*/

.bannerbox {
  width:100%;
  position:relative;
  overflow:hidden;
  height:490px;
  margin: 30px;
  margin-bottom: 0.2px;
}
.banner {
  width: 1900px; /*图宽*/
  position: absolute;
  left: 50%;
  margin-left: -962px; /*图宽的一半*/
}

</style>
