import { RootStateTypes } from './types'
import { GetterTree } from 'vuex'
const getters: GetterTree<RootStateTypes, any> = {
  name: (state: RootStateTypes) => state.name,
  age: (state: RootStateTypes) => state.age,
  sex: (state: RootStateTypes) => state.sex,
  ismarrie: (state: RootStateTypes) => state.ismarrie,
  isOk: (state: RootStateTypes) => state.isOk
}

export default getters
