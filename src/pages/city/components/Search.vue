<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder=" 输入城市名或拼音">
    </div>
    <div class="search-content" v-show="listShow" ref="searchList">
      <ul>
        <router-link to="/">
          <li
            v-for="item in this.result"
            v-text="item.name"
            :key="item.id"
            class="search-item"
            @click="handleCityClicked(item)"
          ></li>
        </router-link>
        <li class="search-item" v-show="noResult" v-text="'没有找到相关内容'"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      result: [],
      listShow: false
    }
  },
  computed: {
    noResult () {
      return !this.result.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.keyword) {
        this.listShow = true
      } else {
        this.listShow = false
      }
      this.timer = setTimeout(() => {
        this.result = []
        for (let key in this.cities) {
          this.cities[key].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              this.result.push(value)
            }
          })
        }
        // console.log(this.result)
        // this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClicked (city) {
      // this.$store.dispatch('changeCity', name)
      // this.$store.commit('changeCity', name)
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchList)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .search
    height: .74rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
      padding: 0 .1rem
  .search-content
    position: absolute
    top: 1.6rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background: #fff
    overflow: hidden
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      border-bottom: #eee solid .01rem
</style>
