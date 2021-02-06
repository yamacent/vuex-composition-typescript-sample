import { State } from './state'

export const getters = {
  doubledCounter(state: State) {
    return state.counter * 2
  }
} as const

export type Getters = typeof getters
