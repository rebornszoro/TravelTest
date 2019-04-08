<template>
  <div class="header">
    <ul class="alphabetList">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .alphabetList
    position: absolute
    display: flex
    flex-direction: column
    top: 1.6rem
    bottom: 0
    right: .1rem
    justify-content: center
    .item
      line-height: .4rem
      width: .4rem
      text-align: center
</style>
