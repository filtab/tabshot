<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import { test } from '@/api/commonApi'
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(test)
  }
}
</script>
