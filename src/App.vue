<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    
    <router-view></router-view>
  </div>
</template>

<script>

import MainTabBar from './components/content/mainTabbar/MainTabBar'
export default {
  components: { 
    MainTabBar,
  
  },
  name: 'App'
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
