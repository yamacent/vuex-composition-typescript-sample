import { ActionContext, ActionTree, CommitOptions } from 'vuex'
import { Mutations } from './mutations'
import { State } from './state'
import { RootMutations } from '..'

type AugmentedActionContext = {
  commit<
    K extends keyof RootMutations,
    P extends Parameters<RootMutations[K]>[1]
  >(
    key: K,
    payload: P,
    options: { root: true }
  ): ReturnType<RootMutations[K]>
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
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
    commit('setCounter', 3, { root: true })

    return new Promise(resolve => {
      setTimeout(() => {
        const data = 256
        commit('setCounter', data, { root: true })
        resolve(data)
      }, 500)
    })
  }
}
