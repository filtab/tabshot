<template>
  <div v-if="show">
    <div class="hidden-md-and-up fs-24 c-000 fw-700">我是手机端</div>
    <div class="hidden-sm-and-down">我是PC端</div>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <test title="区块高度" number="1080" :icon-content="'我是tip内容'"/>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <test title="区块高度1" number="1080" />
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <test title="区块高度2" number="1080" />
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <test title="区块高度3" number="1080" />
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <test title="区块高度4" number="1080" />
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <div class="grid-content bg-purple">
          <test title="区块高度5" number="1080" />
        </div>
      </el-col>
    </el-row>
    {{$t('message.title')}}
    {{lang}}
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <div>
        <div class="block">
          <span class="demonstration">{{$t('message.a001')}}</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import test from '../../components/test/index.vue'
export default {
  components: {
    test
  },
  watch: {
    lang() {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  data() {
    return {
      show: true,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      value1: '',
      value2: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  computed: {
    ...mapGetters({
      'lang': 'lang/getLang'
    })
  }
}
</script>

<style lang="scss">
  .el-col {
    border-radius: 4px;
    margin-bottom: 12px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

