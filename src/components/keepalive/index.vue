<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    {{input}}
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      input: this.value
    }
  },
  watch: {
    value(v) {
      this.input = v
    }
  }
}
</script>
