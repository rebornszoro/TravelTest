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
  <div class="header-right">
    {{this.city}}
    <span class="iconfont">
      &#xe64a;
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scope>//scope make this css only have effects on this single-file-component
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    background: #00bcd4
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
      width: 1.6rem
      float: right
      text-align: center
</style>
