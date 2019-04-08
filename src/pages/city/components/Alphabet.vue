<template>
  <div class="header">
    <ul class="alphabetList">
      <li class="item" v-for="(cityH, key) of cities" :key="key" v-text="key"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .alphabetList
    position: absolute
    top: 1.6rem
    right: 0
    justify-content: center
    background: #fff
    display: flex
    flex-direction: column
    margin-top: 2rem
    .item
      line-height: .4rem
      width: .5rem
      text-align: center
      text-indent: -.15rem
      color: $bgColor
</style>
