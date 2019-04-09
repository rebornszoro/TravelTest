<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <router-link to="/">
            <div class="button-wrapper">
              <div class="button" v-text="this.$store.state.city"></div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <router-link to="/">
            <div
              class="button-wrapper"
              v-for="city of hotCities"
              :key="city.id"
              @click="handleCityClicked(city.name)"
            >
              <div class="button" v-text="city.name"></div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="area" v-for="(cityH, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom" v-text="key"></div>
        <div class="item-list">
          <router-link to="/">
            <div
              class="item border-bottom"
              v-for="city of cityH"
              :key="city.id"
              v-text="city.name"
              @click="handleCityClicked(city.name)"
            ></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    alphabetClickedItem: String
  },
  methods: {
    handleCityClicked (name) {
      // this.$store.dispatch('changeCity', name)
      this.$store.commit('changeCity', name)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    alphabetClickedItem () { // 监听alphabetClickedItem值的变化，变化时触发此函数
      const element = this.$refs[this.alphabetClickedItem][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .list
    position: absolute
    top: 1.6rem
    right: 0
    bottom: 0
    left: 0
    background: #fff
    overflow: hidden
    .border-topbottom
      &:before
        border-color: #ccc
      &:after
        border-color: #ccc
    .border-bottom
      &:before
        border-color: #ccc
        width: 95%
        margin-left: 1.5%
    .title
      height: .44rem
      line-height: .44rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem// 预留给右侧的导航栏
      overflow: hidden
      .button-wrapper
        width: 33.33%
        float: left
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        color: #666
        padding-left: .2rem
  </style>
