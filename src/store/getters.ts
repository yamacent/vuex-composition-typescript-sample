import { State } from './state'

export const getters = {
  doubledCounter(state: State) {
    return state.counter * 2
  },
  foo(state: State, n: number) {
    return 21
  }
} as const

export type Getters = typeof getters
