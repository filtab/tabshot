<template>
  <div class="home">
    <div class="hbg">
       <div class="navBar">
         <router-view />
         <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#456db8" active-text-color=" #f038ff">
           <el-menu-item index="/login">playground</el-menu-item>
           <el-menu-item index="/down">MacOS</el-menu-item>
           <el-menu-item index="/message">app</el-menu-item>
         </el-menu>
       </div>
    </div>
    <!-- <div id="particlesId"></div> -->
  </div>
</template>
<script>
import '../../../public//lib/particles.min.js'
// import particlesConfig from '../../../public/particles.json'
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
  // mounted() {
  //   this.$nextTick(() => {
  //     window.particlesJS('particlesId', particlesConfig)
  //   })
  // }
}
</script>

<style lang="scss">
.home {
  background: #fff;
  // #particlesId {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 9;
  // }
  .hbg {
    margin: 0 auto;
    width: 1280px;
    height:1000px;
    background-color: pink;
    display: flex;
    .navBar{
      width: 100%;
      height: 100px;
      // background-color:yellow;
      margin-top: 40px;
      .el-menu{
        background-color: pink;
        width: 400px;
        height: 100px;
        margin: 0 auto;
      }
      .el-menu.el-menu--horizontal {
        border-bottom: solid 1px pink !important;
      }
      .el-menu-item{
        margin-left: 30px;
      }
      // 鼠标移入
      .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
       background-color: #38ff8b;
      }
    }
    // background: url('../../assets/imgs/earth.jpg') no-repeat;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: 50% 50%;
  }
}
</style>
