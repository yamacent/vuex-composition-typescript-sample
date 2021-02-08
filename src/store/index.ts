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

type Modules = {
  moduleA: [moduleA.State, moduleA.Mutations, moduleA.Actions, moduleA.Getters]
}

type Prefix<P extends string, T> = {
  [Key in keyof T as `${P}/${Key extends string ? Key : never}`]: T[Key]
}

type PrefixEach<P extends string, T> = {
  [Key in keyof T]: Prefix<P, T[Key]>
}

type PrefiexedModules = {
  [Key in keyof Modules]: PrefixEach<Key, Modules[Key]>
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

type FlatIntersection<T> = { [Key in keyof T]: T[Key] } extends infer O ? O : never

type ValueOf<T> = T[keyof T]

export type RootState = State & UnionToIntersection<ValueOf<Modules>[0]>

export type RootMutations = Mutations & FlatIntersection<UnionToIntersection<ValueOf<PrefiexedModules>[1]>>

export type RootActions = Actions & FlatIntersection<UnionToIntersection<ValueOf<PrefiexedModules>[2]>>

export type RootGetters = Getters & FlatIntersection<UnionToIntersection<ValueOf<PrefiexedModules>[3]>>

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
