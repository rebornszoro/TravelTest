<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        @click="handleGallaryClicked"
        src="//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg">
      <div class="banner-info">
        <div class="banner-title">长隆野生动物世界(5A景区)</div>
        <div class="banner-img-counts">
          <span class="count">102</span>
          <span class="iconfont">&#xe6dd;</span>
        </div>
      </div>
    </div>
    <common-gallary
      :imgList="imgList"
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
  data () {
    return {
      showGallary: false,
      imgList: [
        'http://img1.qunarzz.com/sight/p0/1605/d4/d4e2dce9d328d5b290.img.jpg_r_800x800_892973df.jpg',
        'http://img1.qunarzz.com/sight/p0/1605/d4/d4e2dce9d328d5b290.img.jpg_r_800x800_892973df.jpg'
      ]
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
