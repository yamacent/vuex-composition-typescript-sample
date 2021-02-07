import { GetterTree } from 'vuex'
import { RootGetters, RootState } from '.'
import { State } from './state'

type GettersParam = { [K in keyof RootGetters]: ReturnType<RootGetters[K]> }

export type Getters = {
  userInfo(state: State): string
  detailedUserInfo(state: State, getters: GettersParam): string
}

export const getters: GetterTree<State, RootState> & Getters = {
  userInfo(state) {
    const user = state.user
    if (!user) {
      return '(N/A)'
    }
    return `${user.name} (@${user.id})`
  },
  detailedUserInfo(state, getters) {
    return getters.userInfo + ' detailed'
  }
}
