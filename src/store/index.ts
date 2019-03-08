import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './actions'
Vue.use(Vuex)
const store: Store<any> = new Vuex.Store({
  state,  
  getters,
  actions,
  mutations
})

export default store
