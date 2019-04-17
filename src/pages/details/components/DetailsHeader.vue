<template>
  <div class="detail-header">
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="absShow"
    >
      <span class="iconfont">
        &#xe624;
      </span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!absShow"
      :style="opacityStyle"
    >
      <router-link tag="div" to="/" class="header-back">
        <span class="iconfont">
          &#xe624;
        </span>
      </router-link>
      <span class="header-title">
        景点详情
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsHeader',
  data () {
    return {
      absShow: true,
      top: 0,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    scrollHandle (e) {
      if (document.body.scrollTop) {
        this.top = document.body.scrollTop
      } else {
        this.top = document.documentElement.scrollTop
      }
      // console.log(this.top)
      if (this.top < 60) {
        this.absShow = true
      } else {
        this.absShow = false
        if (this.top >= 60 && this.top <= 244) {
          this.opacityStyle.opacity = (this.top - 60) * 0.01
        } else {
          this.opacityStyle.opacity = 1
        }
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollHandle)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollHandle)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: rgba(0, 0, 0, 0.3)
    text-align: center
    .iconfont
      color: white
      line-height: .8rem
      font-size: .35rem
  .header-fixed
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    overflow: hidden
    background: #00bcd4
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 20
    .header-back
      float: left
      width: .64rem
      text-align: center
      .iconfont
        color: #fff
    .header-title
      width: 100% - .64rem
      text-align: center
      text-indent: -.64rem
      float: left
      font-size: .32rem
      color: #fff
</style>
