import { State } from './state'
import { RootGetters, RootState } from '..'
import { GetterTree } from 'vuex'

type GettersParam = { [K in keyof Getters]: ReturnType<Getters[K]> }
type RootGettersParam = { [K in keyof RootGetters]: ReturnType<RootGetters[K]> }

export type Getters = {
  bookTitle(
    state: State,
    getters: GettersParam,
    rootState: RootState,
    rootGetters: RootGettersParam
  ): string
}

export const getters: GetterTree<State, RootState> & Getters = {
  bookTitle(state) {
    if (state.book) {
      return state.book.title
    }
    return '(N/A)'
  }
}
