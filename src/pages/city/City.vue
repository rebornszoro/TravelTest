<template>
  <div>
    <city-header></city-header>
    <city-search :cities="this.cities"></city-search>
    <city-list
      :hotCities="this.hotCities"
      :cities="this.cities"
      :alphabetClickedItem="this.alphabetClickedItem"
    ></city-list>
    <city-alphabet
      :cities="this.cities"
      @alphabetClicked="alphabetClicked"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      alphabetClickedItem: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.cityInfoHandle)
    },
    cityInfoHandle (cityData) {
      // console.log(cityData)
      cityData = cityData.data
      if (cityData.ret && cityData.data) {
        const data = cityData.data
        this.hotCities = data.hotCities
        // console.log(this.hotCities)
        this.cities = data.cities
        console.log(this.cities)
      }
    },
    alphabetClicked (msg) {
      this.alphabetClickedItem = msg
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
