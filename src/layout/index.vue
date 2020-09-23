<template>
  <div class="page-layout">
    <!-- 内容区域 -->
    <div class="page-container">
      <el-aside>
        <!-- <div class="logo">
          <img src="../assets/imgs/logo.png" alt="">
        </div> -->
        <!-- <sideMenu :isCollapse="isCollapse" /> -->
      </el-aside>
      <div class="content">
        <!-- 导航 -->
        <page-nav @change="changeCollapse" :isCollapse="isCollapse"/>
        <el-main>
          <el-scrollbar>
            <transition name="el-fade-in-linear" mode="out-in">
              <keep-alive :include="'addKeepAlive'">
                <router-view />
              </keep-alive>
            </transition>
          </el-scrollbar>
        </el-main>
      </div>
    </div>
  </div>
</template>

<script>
import pageNav from '@/layout/header/nav.vue'
// import sideMenu from '@/layout/menu/index.vue'
export default {
  components: {
    pageNav
    // sideMenu
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.page-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .page-container {
    flex: 1;
    // overflow: hidden;
    display: flex;
    .content {
      flex: 1;
      overflow: hidden;
    }
    .el-aside {
      width: initial !important;
    }
    // .logo {
    //   display: inline-block;
    //   width: 100%;
    //   height: 45px;
    //   background:#324157;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   img {
    //     width: 35px;
    //     height: 35px;
    //   }
    // }
    .el-main {
      // height: calc(100% - 45px);
      // height: 1000px;
      padding: 0px;
    }
  }
}
</style>
