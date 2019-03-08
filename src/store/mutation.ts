import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'
const mutations: MutationTree<RootStateTypes> = {
  SET_NAME (state: RootStateTypes, data: string) {
    state.name = data
  },
  SET_MARRIED (state: RootStateTypes, data: boolean) {
    state.ismarrie = data
  },
  SET_ISOK (state: RootStateTypes, data: Object) {
    state.isOk = data
  }
}

export default mutations
