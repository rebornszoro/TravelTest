<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        @click="handleGallaryClicked"
        :src=bannerImg>
      <div class="banner-info">
        <div class="banner-title" v-text="sightName"></div>
        <div class="banner-img-counts">
          <span class="count" v-text="gallaryImgs.length"></span>
          <span class="iconfont">&#xe6dd;</span>
        </div>
      </div>
    </div>
    <common-gallary
      :imgList=gallaryImgs
      v-show="showGallary"
      @handleWrapperClicked="handleWrapperClicked"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'DetailsBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleGallaryClicked () {
      this.showGallary = true
    },
    handleWrapperClicked () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    height: 0
    padding-bottom: 55%
    overflow: hidden
    position: relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(rgba(0,0,0,0), #000000a6)// 默认从上到下的渐变
      .banner-title
        float: left
        font-size: .4rem
        margin-left: .08rem
        // background: rgba(0, 0, 0, 0.28)
        // border-radius: 0.15rem
        // padding: 0 .1rem
      .banner-img-counts
        float: right
        margin-right: .12rem
        line-height: .64rem
        height: .64rem
        display: flex
        .count
          font-size: .3rem
          padding: 0 .1rem
        .iconfont
          font-size: .4rem
</style>
