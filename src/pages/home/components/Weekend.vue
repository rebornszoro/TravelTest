<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title" v-text="item.title"></p>
          <p class="item-desc" v-text="item.desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: 'weekend0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '清远周边逛',
        desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
      }, {
        id: 'weekend0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
      }, {
        id: 'weekend0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
        title: '欢乐长隆',
        desc: '世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验'
      }, {
        id: 'weekend0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '阳江温泉知多少',
        desc: '这里的天空和大海让人心旷神怡，配上舒缓的优美音乐，泡个暖暖的温泉岂不美哉'
      }, {
        id: 'weekend0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3c/96128de07fdd2f.jpg_r_640x214_4505bca3.jpg',
        title: '中山必游TOP10',
        desc: '国父故乡，革命起源地'
      }, {
        id: 'weekend0006',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '广州必打卡',
        desc: '感受现代与传统相融合的广州'
      }, {
        id: 'weekend0007',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/47/cbdc44f461db0d.jpg_r_640x214_aab1da76.jpg',
        title: '珠江夜游',
        desc: '绚烂的霓虹将珠江照亮，跳上一艘游船，沉浸在这醉人的夜色中'
      }, {
        id: 'weekend0008',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/11/248b40e34116fb.jpg_r_640x214_560e7d05.jpg',
        title: '珠海打卡',
        desc: '要休闲，要观光，统统满足你'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'// 封装了一个文字过多时以省略号显示的样式
  .weekend-title
    background-color: #eee
    height: .8rem
    line-height: 1.05rem
    text-indent: .2rem
    font-size: .35rem
  .item
    width: 100%
    height: 0
    padding-bottom: 50%
    overflow: hidden
    // background-color: red
    .item-img-wrapper
      width: 100%
      height: 0
      padding-bottom: 33.4%
      overflow: hidden
      .item-img
        width: 95%
        padding: 0 2.5%
    .item-info
      padding: .1rem .2rem .3rem .2rem
      .item-title
        height: .5rem
        line-height: .5rem
        font-size: .3rem
      .item-desc
        height: .6rem
        line-height: .6rem
        overflow: hidden
        font-size: .23rem
        color: #aaa
        padding-right: .2rem
        ellipsis()
</style>
