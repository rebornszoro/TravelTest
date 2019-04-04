<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <img class="icon-img" :src="item.iconUrl">
      <p class="icon-title" v-text="item.iconTitle"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: 'icon001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        iconTitle: '景点门票'
      }, {
        id: 'icon002',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        iconTitle: '必游榜单'
      }, {
        id: 'icon003',
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        iconTitle: '自然风光'
      }, {
        id: 'icon004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        iconTitle: '亲子游'
      }, {
        id: 'icon005',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png',
        iconTitle: '农家度假'
      }, {
        id: 'icon006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        iconTitle: '游乐场'
      }, {
        id: 'icon007',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        iconTitle: '文化古迹'
      }, {
        id: 'icon008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        iconTitle: '泡温泉'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    width: 100%
    height: 0
    padding-bottom: 50%
    overflow: hidden
    // background-color: #eee
    .icon
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      overflow: hidden
      // background-color: #eee
      text-align: center
      padding-top: 1%
      .icon-img
        width: 70%
        overflow: hidden
      .icon-title
        color: #333
        font-size: .3rem
</style>
