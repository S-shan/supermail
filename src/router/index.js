import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

  const routes= [
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component:Home,
      meta: {
        title: '首页'
      }
    },
    {
      path:'/category',
      component:Category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/cart',
      component:Cart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/profile',
      component:Profile,
      meta: {
        title: '个人'
      }
    }
  ]
  const router = new Router({
    routes,
    mode:'history',
  })

  router.beforeEach((to,from,next) => {
    document.title = to.matched[0].meta.title;
    next()
  })

  export default router
  
  


