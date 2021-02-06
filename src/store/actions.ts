import { ActionContext, ActionTree } from 'vuex'
import { RootMutations } from '.'
import { State } from './state'

type AugmentedActionContext = {
  commit<K extends keyof RootMutations>(
    key: K,
    payload: Parameters<RootMutations[K]>[1]
  ): ReturnType<RootMutations[K]>
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
