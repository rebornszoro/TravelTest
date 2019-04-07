<template>
  <div class="header">
    <router-link to="/">
      <div class="header-back">
        <span class="iconfont">
          &#xe624;
        </span>
      </div>
    </router-link>
    <span class="header-title">
      城市选择
    </span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    overflow: hidden
    background: $bgColor
    .header-back
      float: left
      width: .64rem
      text-align: center
      .iconfont
        color: #fff
    .header-title
      // width: 90%
      text-align: center
      text-indent: -.64rem
      margin: auto auto
      float: left
      font-size: .32rem
      color: #fff
</style>
