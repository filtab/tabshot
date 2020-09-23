<template>
  <div>
    <div>测试组件</div>
    <div>{{testMsg}}</div>
    <div>{{'tom' | filterTest}}</div>
    <div>{{'tom' | filterTest11}}</div>
  </div>
</template>

<script>
import { test1 } from '@/api/commonApi'
export default {
  data() {
    return {}
  },
  mounted() {
    console.log(this.testMsg)
    this.testMe()
  },
  methods: {
    testMe() {
      console.log('9999')
    },
    getTest1() {
      test1().then(res => {
        console.log(res)
      })
    }
  },
  filters: {
    filterTest11(e) {
      return '1111' + e
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
