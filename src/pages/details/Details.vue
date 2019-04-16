<template>
  <div>
    <details-banner></details-banner>
    <details-header></details-header>
    <div class="test">test</div>
  </div>
</template>

<script>
import DetailsBanner from './components/DetailsBanner.vue'
import DetailsHeader from './components/DetailsHeader.vue'
export default {
  name: 'Details',
  components: {
    DetailsBanner,
    DetailsHeader
  }
}
</script>

<style lang="stylus" scoped>
  .test
    height: 50rem
    // background: red
</style>
