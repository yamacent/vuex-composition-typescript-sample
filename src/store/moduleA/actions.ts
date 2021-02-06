import { ActionTree } from 'vuex'
import { Mutations } from './mutations'
import { State } from './state'
import { RootState } from '..'
import { api } from '@/api'
import { AugmentedModuleActionContext } from '../typeUtil'

type AugmentedActionContext = AugmentedModuleActionContext<State, Mutations>

export type Actions = {
  getCounter(context: AugmentedActionContext): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
  async getCounter({ commit }: AugmentedActionContext) {
    const data = await api(256)
    commit('setCounter', data, { root: true })
  }
}
