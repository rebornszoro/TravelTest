<template>
  <div class="wrapper" @click="handleWrapperClicked">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) of imgList" :key="index">
        <div class="img-wrapper">
          <img class="img" :src="item" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgList: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        loop: false,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleWrapperClicked () {
      this.$emit('handleWrapperClicked')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow: inherit
    width: 100%
  .wrapper
    z-index: 99
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    display: flex
    flex-direction: column
    justify-content: center
    .img-wrapper
      height: 0
      padding-bottom: 55%
      .img
        width: 100%
    .swiper-pagination
      position: relative
      top: 1rem
      // background: #fff
      width: 100%
      color: #999
</style>
