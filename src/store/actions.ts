import { RootStateTypes } from './types'
import { ActionTree } from 'vuex'

const actions: ActionTree<RootStateTypes, any> = {
  SET_USER_NAME ({ commit }, data: string) {
    commit('SET_NAME', data)
  },
  SET_USER_MARRIED ({ commit }, data: boolean) {
    commit('SET_MARRIED', data)
  },
  SET_USER_ISOK ({ commit }, data: Object) {
    commit('SET_ISOK', data)
  }
}

export default actions
