import { State } from './state'
import { RootState } from '..'
import { GetterTree } from 'vuex'

export type Getters = {
  doubledCounter(state: State, getters: Getters, rootState: RootState): number
}

export const getters: GetterTree<State, RootState> & Getters = {
  doubledCounter(state: State, getters, rootState) {
    return state.count * 2
  }
}
