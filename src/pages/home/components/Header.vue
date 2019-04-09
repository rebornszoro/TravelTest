<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont">
      &#xe624;
    </span>
  </div>
  <div class="header-input">
    <span class="iconfont">
      &#xe632;
    </span>
    请输入城市、景点或游玩主题</div>
  <router-link to="/city">
    <div class="header-right">
      <span class="iconfont">
        &#xe64a;
      </span>
      <span class="city" v-text="this.$store.state.city"></span>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
  }
}
</script>

<style lang="stylus" scope>//scope make this css only have effects on this single-file-component
  @import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .1rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 2.1rem
      float: right
      text-align: center
      color: #fff
      .iconfont
        float: right
        margin-right: .2rem
        line-height: .9rem
      .city
        float: right
        margin-right: .1rem
</style>
