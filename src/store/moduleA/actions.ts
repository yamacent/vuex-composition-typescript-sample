import { ActionTree } from 'vuex'
import { Mutations } from './mutations'
import { State } from './state'
import { RootState } from '..'
import { api } from '@/common'
import { AugmentedModuleActionContext } from '../typeUtil'

type Context = AugmentedModuleActionContext<State, Mutations>

export type Actions = {
  getCounter(context: Context): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
  async getCounter({ commit }) {
    const data = await api(256)
    commit('setCount', data)
  }
}
