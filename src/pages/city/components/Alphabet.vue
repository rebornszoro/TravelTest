<template>
  <div class="header">
    <ul class="alphabetList">
      <li
        class="item"
        v-for="(cityH, key) of cities"
        :key="key"
        v-text="key"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="key"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (event) {
      // console.log(event.target.innerText)
      this.$emit('alphabetClicked', event.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (event) {
      if (this.touchStatus === true) {
        const touchY = event.touches[0].clientY
        const index = Math.floor((touchY - 187) / 20)
        if (index < 0) {
          this.$emit('alphabetClicked', this.letters[0])
        } else if (index >= 0 && index <= 21) {
          this.$emit('alphabetClicked', this.letters[index])
        } else {
          this.$emit('alphabetClicked', this.letters[21])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
    // border-radius: .1rem
    .item
      line-height: .4rem
      width: .5rem
      text-align: center
      text-indent: -.15rem
      color: $bgColor
</style>
