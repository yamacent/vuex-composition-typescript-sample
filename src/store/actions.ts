import { ActionContext, ActionTree } from 'vuex'
import { Mutations } from './mutations'
import { State } from './state'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export type Actions = {
  getCounter(
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>
}

export const actions: ActionTree<State, State> & Actions = {
  getCounter({ commit }: AugmentedActionContext) {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = 256
        commit('setCounter', data)
        resolve(data)
      }, 500)
    })
  }
}
