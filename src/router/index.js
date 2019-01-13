import Vue from 'vue'
import Router from 'vue-router'
import JetsPage from '@/components/JetsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JetsPage',
      component: JetsPage
    }
  ]
})
