<template>
  <div class="nav">
     <div class="dec">tabshot
     </div>
     <div id="neon-btn">
         <button class="btn two">documentation</button>
     </div>
  </div>
</template>

<script>
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
  props: ['isCollapse'],
  data() {
    return {
      langText: '中文',
      avatarUrl: require('../../assets/imgs/logo.png')
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const lang = localStorage.getItem('lang') || 'zh_CN'
      this.hanleLang(lang)
      this.$i18n.locale = lang
      this.$store.dispatch('lang/setLang', lang)
    },
    changeCollapse() {
      this.$emit('change')
    },
    hanleLang(lang) {
      switch (lang) {
        case 'zh_CN':
          this.langText = '中文'
          break
        case 'en_US':
          this.langText = 'English'
          break
      }

      if (lang === 'en_US') {
        locale.use(enLocale)
      } else {
        locale.use(zhLocale)
      }
    },
    onCommand(lang) {
      this.hanleLang(lang)
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
      document.cookie = `lang=${lang};`
      this.$store.dispatch('lang/setLang', lang)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height:250px;
  background: #456db8;
  text-align: center;
  .dec{
   width: 100%;
   height: 180px;
   line-height: 200px;
   font-size: 18px;
   color: yellow;
  }
  #neon-btn {
  //  display: flex;
   align-items: center;
   justify-content: space-around;
   height: 100px;
  //  background: #fff;
  }
  .btn {
    border: 1px solid;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 20px;
    font-weight: 300;
  }
  .two {
    color: #f038ff;
  }
  .btn:hover {
    color: white;
    border: 0;
  }
  .two:hover {
    background-color: #f038ff;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  }
}
</style>
