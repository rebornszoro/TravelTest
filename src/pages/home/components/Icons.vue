<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages" :key="page.index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img class="icon-img" :src="item.iconUrl">
          <p class="icon-title" v-text="item.iconTitle"></p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
      // iconList: [{
      //   id: 'icon001',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //   iconTitle: '景点门票'
      // }, {
      //   id: 'icon002',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      //   iconTitle: '必游榜单'
      // }, {
      //   id: 'icon003',
      //   iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
      //   iconTitle: '自然风光'
      // }, {
      //   id: 'icon004',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
      //   iconTitle: '亲子游'
      // }, {
      //   id: 'icon005',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png',
      //   iconTitle: '农家度假'
      // }, {
      //   id: 'icon006',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
      //   iconTitle: '游乐场'
      // }, {
      //   id: 'icon007',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
      //   iconTitle: '文化古迹'
      // }, {
      //   id: 'icon008',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
      //   iconTitle: '泡温泉'
      // }, {
      //   id: 'icon009',
      //   iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png',
      //   iconTitle: '测试用例'
      // }]
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  @import '../../../assets/styles/mixins.styl'// 封装了一个文字过多时以省略号显示的样式
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 48%
    // overflow: hidden
    // background-color: #eee
    .swiper-pagination
      .swiper-pagination-bullet-active
        background-color: #8cc7e7
  .icon
    float: left
    width: 23%
    margin-left: 1.6%
    height: 0
    padding-bottom: 20%
    overflow: hidden
    // background-color: #eee
    text-align: center
    padding-top: 1%
    .icon-img
      width: 70%
      overflow: hidden
    .icon-title
      color: $darkTextColor
      font-size: .23rem
      padding-top: .05rem
      ellipsis()
</style>
