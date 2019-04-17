<template>
  <div id="app">
    <keep-alive exclude="Details"><!-- 不对Details组件做缓存 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
