<template>
  <div>
    <div
      class="item"
      :list="list"
      v-for="(item, index) of list"
      :key="index"
    >
      <div
        class="item-title"
      >
        <span class="item-title-icon"></span>
        <span class="item-title-content" v-text="item.title"></span>
        <div class="item-children" v-if="item.children">
          <details-list
            :list="item.children"
          ></details-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item
    // overflow: hidden;
    position: relative
    margin-bottom: -.02rem
    padding: 0 .1rem
    // height: .88rem
    background: #fff
    color: #333
    font-size: .32rem
    line-height: .88rem
    text-indent: .4rem
    .item-title
      .item-title-icon
        display: inline-block
        width: .36rem
        height: .36rem
        background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
        background-size: auto
        margin-right: .1rem
        background-size: .4rem 3rem
        position: relative
        top: .05rem
        left: .1rem
      .item-title-content
        line-height: .8rem
        font-size: .32rem
        padding: 0 .2rem
      .item-children
        padding-left: .2rem
</style>
