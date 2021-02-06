import { api, User } from '@/common'
import { ActionContext, ActionTree } from 'vuex'
import { RootMutations } from '.'
import { State } from './state'

type AugmentedActionContext = {
  commit<K extends keyof RootMutations>(
    key: K,
    payload: Parameters<RootMutations[K]>[1]
  ): ReturnType<RootMutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export type Actions = {
  getUser(context: AugmentedActionContext, payload: string): Promise<void>
}

export const actions: ActionTree<State, State> & Actions = {
  async getUser({ commit }: AugmentedActionContext, id) {
    const users = await api<User[]>([{ id: 'abc123', name: 'John Doe' }])
    const user = users.find(u => u.id === id)
    if (user) {
      commit('setUser', user)
    }
  }
}
