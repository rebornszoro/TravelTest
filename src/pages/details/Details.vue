<template>
  <div>
    <details-banner></details-banner>
    <details-header></details-header>
    <details-list :list="this.list"></details-list>
  </div>
</template>

<script>
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
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票-A售票处'
          }, {
            title: '成人三馆联票-B售票处'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票',
        children: [{
          title: '学生三馆联票',
          children: [{
            title: '学生三馆联票-A售票处'
          }, {
            title: '学生三馆联票-B售票处'
          }]
        }, {
          title: '学生五馆联票'
        }]
      }, {
        title: '儿童票',
        children: [{
          title: '儿童三馆联票'
        }, {
          title: '儿童五馆联票'
        }]
      }, {
        title: '特惠票',
        children: [{
          title: '特惠三馆联票'
        }, {
          title: '特惠五馆联票'
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
