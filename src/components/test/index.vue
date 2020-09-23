<template>
  <div class="kuai">
    <div>
      <span>{{title}}</span>
      <span v-if="iconContent">
        <el-tooltip placement="top">
          <div slot="content">{{iconContent}}</div>
          <span class="el-icon-warning"></span>
        </el-tooltip>
      </span>
    </div>
    <div>{{number}}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'number', 'icon', 'iconContent'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.kuai {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
