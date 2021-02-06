import { GetterTree } from 'vuex'
import { RootState } from '.'
import { State } from './state'

export type Getters = {
  userInfo(state: State): string
}

export const getters: GetterTree<State, RootState> & Getters = {
  userInfo(state) {
    const user = state.user
    if (!user) {
      return '(N/A)'
    }
    return `${user.name} (@${user.id})`
  }
}
