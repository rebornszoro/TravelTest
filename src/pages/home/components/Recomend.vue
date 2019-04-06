<template>
  <div>
    <div class="recomend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recomendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title" v-text="item.title"></p>
          <p class="item-desc" v-text="item.desc"></p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecomend',
  data () {
    return {
      // recomendList: [{
      //   id: 'recomend0001',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_200x200_2f08733b.jpg',
      //   title: '长隆野生动物世界',
      //   desc: '熊猫三胞胎与你共享欢乐时光'
      // }, {
      //   id: 'recomend0002',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_200x200_d3b1427c.jpg',
      //   title: '长隆欢乐世界',
      //   desc: '爱挑战的你怎能错过垂直过山车'
      // }, {
      //   id: 'recomend0003',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_200x200_f3ad8918.jpg',
      //   title: '长隆国际大马戏剧院',
      //   desc: '跟着大马戏团一起party~'
      // }, {
      //   id: 'recomend0004',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
      //   title: '白水寨',
      //   desc: '奇趣水谷与天南第一梯'
      // }, {
      //   id: 'recomend0005',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/3d/3d096f06abb5c7a5.water.jpg_200x200_f62c3108.jpg',
      //   title: '都喜泰丽温泉度假酒店',
      //   desc: '帅的人都去过了😎，你还等什么~'
      // }, {
      //   id: 'recomend0006',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/201310/24/2fb55f43abecc695c8d65eac.jpg_200x200_d6d700c9.jpg',
      //   title: '崴格诗温泉庄园',
      //   desc: '原生态养生谷，浓郁的欧陆风情'
      // }, {
      //   id: 'recomend0007',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_200x200_ea09ee17.jpg',
      //   title: '岭南印象园',
      //   desc: '岭南印象园江面上龙船竞渡，水中好戏不断'
      // }, {
      //   id: 'recomend0008',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1605/56/568488164697e2f590.img.jpg_200x200_967bd139.jpg',
      //   title: '越美冰雪大世界',
      //   desc: '🔥好评如潮，小伙伴热推景点~'
      // }]
    }
  },
  props: {
    recomendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'// 封装了一个文字过多时以省略号显示的样式
  .recomend-title
    background-color: #eee
    height: .8rem
    line-height: 1.05rem
    text-indent: .2rem
    font-size: .35rem
  .item
    width: 100%
    height: 0
    padding-bottom: 30%
    overflow: hidden
    // background-color: red
    .item-img-wrapper
      width: 25%
      height: 0
      padding-bottom: 25%
      margin-top: 2.5%
      margin-left: 2.5%
      overflow: hidden
      // background-color: green
      float: left
      .item-img
        width: 100%
    .item-info
      float: left
      width: 70%
      margin-top: 2.5%
      margin-left: 2.5%
      .item-title
        height: .54rem
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        height: .4rem
        line-height: .4rem
        font-size: .28rem
        color: #aaa
        ellipsis()
      .item-button
        background-color: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        margin-top: .4rem
        color: #fff
        line-height: .45rem
        float: right
        margin-right: .3rem
</style>
