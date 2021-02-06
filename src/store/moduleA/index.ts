import { Module } from 'vuex'
import { RootState } from '..'
import { actions, Actions } from './actions'
import { getters, Getters } from './getters'
import { mutations, Mutations } from './mutations'
import { state, State } from './state'

export const module: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export { State, Mutations, Actions, Getters }
