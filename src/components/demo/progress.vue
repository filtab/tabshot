<template>
  <div>
    <div class="step">
      <div>
        <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
      </div>
      <div>
        <el-progress :percentage="percentage" :color="customColors"></el-progress>
      </div>
      <div>
        <el-progress :percentage="percentage" :color="customColors"></el-progress>
      </div>
      <div>
        <el-progress :percentage="percentage" :color="customColors"></el-progress>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="进度条">
        <template slot-scope="scope">
          <el-progress :percentage="scope.row.percentage" :color="customColors" :width="200"></el-progress>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="刻度盘">
        <template slot-scope="scope">
          <el-progress type="dashboard" :percentage="scope.row.percentage" :color="colors"></el-progress>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { percentage: 30 },
        { percentage: 30 }
      ],
      percentage: 80,
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  mounted() {
    this.percentageChange()
  },
  methods: {
    percentageChange() {
      const _this = this
      setInterval(() => {
        const num = Math.floor(Math.random() * 100)
        _this.percentage = num
        this.tableData = [
          { percentage: num },
          { percentage: num }
        ]
      }, 2000)
    }
  },
  computed: {
    colors() {
      const p = this.percentage
      if (p > 0 && p <= 30) {
        return 'red'
      } else if (p > 30 && p <= 60) {
        return 'blue'
      } else if (p > 60 && p <= 100) {
        return 'green'
      }
      return '#000'
    }
  }
}
</script>

<style lang="scss">
.step {
  display: flex;
  align-items: center;
  >div {
    flex: 1;
    height: 100%;
  }
}
</style>
