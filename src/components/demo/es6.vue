<template>
  <div>
    {{setMap()}}
    <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
    {{num}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: ''
    }
  },
  mounted() {
    this.createArr()
  },
  methods: {
    setMap() {
      const objArr = [5, 6, 5, 5, 5]
      const se = new Set(objArr)
      return [...se].toString()
    },
    async createArr() {
      // eslint-disable-next-line no-array-constructor
      var arr = new Array()
      var i = 0
      while (i < 10000000) {
        arr.push({ i })
        i++
      }
      this.testMap(arr)
      this.testFor(arr)
      this.testForIn(arr)
    },
    async testFor(arr) {
      const start = new Date().getTime()
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line no-empty
      for (let index = 0; index < arr.length; index++) {}
      const end = new Date().getTime()
      console.log(end - start, 'for循环的性能测试')
    },
    async testMap(arr) {
      const start = new Date().getTime()
      // eslint-disable-next-line no-unused-vars
      arr.map(el => {})
      const end = new Date().getTime()
      console.log(end - start, 'map循环的性能测试')
    },
    async testForIn(arr) {
      const start = new Date().getTime()
      // eslint-disable-next-line no-unused-vars
      arr.forEach(element => {})
      const end = new Date().getTime()
      console.log(end - start, 'forEach循环的性能测试')
    }
  }
}
</script>
