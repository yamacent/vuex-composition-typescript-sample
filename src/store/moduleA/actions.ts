import { ActionTree } from 'vuex'
import { Mutations } from './mutations'
import { State } from './state'
import { RootState } from '..'
import { api, Book } from '@/common'
import { AugmentedModuleActionContext } from '../typeUtil'
import { Getters } from '.'

type Context = AugmentedModuleActionContext<State, Mutations, Actions, Getters>

export type Actions = {
  getBook(context: Context): Promise<void>
}

export const actions: ActionTree<State, RootState> & Actions = {
  async getBook({ commit, dispatch, getters, rootGetters, state, rootState }) {
    const book = await api<Book>({ id: '123', title: 'foo' })
    commit('setBook', book)
  }
}
