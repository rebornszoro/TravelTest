<template>
  <div>
    <details-banner
      :sightName="this.sightName"
      :bannerImg="this.bannerImg"
      :gallaryImgs="this.gallaryImgs"
    ></details-banner>
    <details-header></details-header>
    <details-list
      :categoryList="this.categoryList"></details-list>
  </div>
</template>

<script>
import axios from 'axios'
import DetailsBanner from './components/DetailsBanner.vue'
import DetailsHeader from './components/DetailsHeader.vue'
import DetailsList from './components/DetailsList.vue'
export default {
  name: 'Details',
  components: {
    DetailsBanner,
    DetailsHeader,
    DetailsList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      lastRouteId: ''
      // list: [{
      //   title: '成人票',
      //   children: [{
      //     title: '成人三馆联票',
      //     children: [{
      //       title: '成人三馆联票-A售票处'
      //     }, {
      //       title: '成人三馆联票-B售票处'
      //     }]
      //   }, {
      //     title: '成人五馆联票'
      //   }]
      // }, {
      //   title: '学生票',
      //   children: [{
      //     title: '学生三馆联票',
      //     children: [{
      //       title: '学生三馆联票-A售票处'
      //     }, {
      //       title: '学生三馆联票-B售票处'
      //     }]
      //   }, {
      //     title: '学生五馆联票'
      //   }]
      // }, {
      //   title: '儿童票',
      //   children: [{
      //     title: '儿童三馆联票'
      //   }, {
      //     title: '儿童五馆联票'
      //   }]
      // }, {
      //   title: '特惠票',
      //   children: [{
      //     title: '特惠三馆联票'
      //   }, {
      //     title: '特惠五馆联票'
      //   }]
      // }]
    }
  },
  methods: {
    // getDetailsInfo () {
    //   axios.get('/api/details.json?id=' + this.route.params.id)
    //     .then(this.detailsInfoHandle)
    // },
    getDetailsInfo () {
      axios.get('/api/details.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.detailsInfoHandle)
    },
    detailsInfoHandle (detailsData) {
      // console.log(detailsData)
      detailsData = detailsData.data
      if (detailsData.ret && detailsData.data) {
        const data = detailsData.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
        // console.log(this.sightName)
      }
    }
  },
  mounted () {
    this.getDetailsInfo()
    this.lastRouteId = this.$route.params.id
  },
  activated () {
    if (this.$route.params.id !== this.lastRouteId) {
      this.lastRouteId = this.$route.params.id
      this.getDetailsInfo()
    }
  }
}
</script>

<style lang="stylus" scoped></style>
