import { State } from './state'
import { RootState } from '..'

export const getters = {
  doubledCounter(state: State) {
    return state.foo + 'fff'
  },
  foo(state: State, n: number, rootState: RootState) {
    rootState.moduleA.foo
  }
} as const

export type Getters = typeof getters
