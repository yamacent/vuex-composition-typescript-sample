import { CommitOptions, Store as VuexStore } from 'vuex'
import { state, State } from './state'
import { getters } from './getters'
import { Module } from 'vuex'
import { RootState, RootMutations } from '..'
import { mutations, Mutations } from './mutations'

const module: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions: {},
  modules: {}
}

export { Mutations }

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<
    K extends keyof RootMutations,
    P extends Parameters<RootMutations[K]>[1]
  >(
    key: K,
    payload: P,
    options?: { root: true }
  ): ReturnType<RootMutations[K]>
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
}

export default module
