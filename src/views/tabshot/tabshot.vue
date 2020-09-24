<template>
  <div class="my-tab">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签四', type: 'warning' },
        { name: '标签四', type: 'warning' },
        { name: '标签四', type: 'warning' },
        { name: '标签四', type: 'warning' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  }
}
</script>

<style>
.my-tab{
  position: absolute;
  height: 500px;
  width: 600px;
  margin: 0 auto;
  margin-top:100px;
  margin-left: 370px;
  border-radius: 10px;
  background-color: #c46f47;
}
.el-tag{
  margin-top: 100px;
  margin-right: 15px;
  margin-left: 25px;
}
</style>
