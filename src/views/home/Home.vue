<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="left"></div><div slot="center">购物街</div></nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <home-recomment-view :recommends="recommends"></home-recomment-view>
</div> 

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {getHomeMultidata} from "../../network/home"
import HomeRecommentView from './childComps/HomeRecommentView.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'

export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: { 
      NavBar,
      HomeSwiper,
      HomeRecommentView
    },
    created() {
      //1.请求多个数据
      //函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
      //函数调用结束 -> 弹出函数栈(释放函数所有的变量)
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>