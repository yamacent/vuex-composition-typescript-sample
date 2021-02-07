import { api, User } from '@/common'
import { ActionContext, ActionTree } from 'vuex'
import { RootActions, RootGetters, RootMutations, RootState } from '.'

type AugmentedActionContext = {
  commit<K extends keyof RootMutations>(
    key: K,
    payload: Parameters<RootMutations[K]>[1]
  ): ReturnType<RootMutations[K]>
  dispatch<K extends keyof RootActions>(
    key: K,
    payload: Parameters<RootActions[K]>[1]
  ): ReturnType<RootActions[K]>
  getters: {
    [K in keyof RootGetters]: ReturnType<RootGetters[K]>
  }
} & Omit<ActionContext<RootState, RootState>, 'commit' | 'dispatch' | 'getters'>

export type Actions = {
  getUser(context: AugmentedActionContext, payload: string): Promise<void>
}

export const actions: ActionTree<RootState, RootState> & Actions = {
  async getUser(
    { commit, dispatch, state, getters }: AugmentedActionContext,
    id
  ) {
    const users = await api<User[]>([{ id: 'abc123', name: 'John Doe' }])
    const user = users.find(u => u.id === id)
    if (user) {
      commit('setUser', user)
      dispatch('getUser', '')
      getters.userInfo
    }
  }
}
