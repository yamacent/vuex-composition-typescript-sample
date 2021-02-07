import {
  CommitOptions,
  createStore,
  DispatchOptions,
  Store as VuexStore
} from 'vuex'
import { Actions, actions } from './actions'
import { getters, Getters } from './getters'
import * as moduleA from './moduleA'
import { Mutations, mutations } from './mutations'
import { State, state } from './state'
import { PayloadAndOptionsTuple } from './typeUtil'

export type RootState = State & {
  moduleA: moduleA.State
}

export type RootMutations = Mutations & {
    [key in keyof moduleA.Mutations as `moduleA/${key}`]: moduleA.Mutations[key]
  }

export type RootGetters = Getters & {
  [key in keyof moduleA.Getters as `moduleA/${key}`]: moduleA.Getters[key]
}

export type RootActions = Actions & {
  [key in keyof moduleA.Actions as `moduleA/${key}`]: moduleA.Actions[key]
}

const store = createStore({
  state: state as RootState,
  getters,
  mutations,
  actions,
  modules: {
    moduleA: moduleA.module
  }
})

export default store

export type Store = Omit<
  VuexStore<RootState>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof RootMutations, P extends Parameters<RootMutations[K]>[1]>(
    key: K,
    ...params: PayloadAndOptionsTuple<P, CommitOptions>
  ): ReturnType<RootMutations[K]>
} & {
  dispatch<K extends keyof RootActions, P extends Parameters<RootActions[K]>[1]>(
    key: K,
    ...params: PayloadAndOptionsTuple<P, DispatchOptions>
  ): ReturnType<RootActions[K]>
} & {
  getters: {
    [K in keyof RootGetters]: ReturnType<RootGetters[K]>
  }
}

export function useStore(): Store {
  return store
}
