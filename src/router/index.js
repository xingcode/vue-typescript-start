import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import menu from '@/components/menu.vue'
import scroll from '@/components/vueSeamlessScroll.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    }
  ]
})
