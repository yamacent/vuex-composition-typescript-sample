import { ActionContext, CommitOptions, MutationTree } from 'vuex'
import { RootMutations, RootState } from '.'

export type AugmentedModuleActionContext<
  State,
  Mutations extends MutationTree<State>
> = {
  commit<K extends keyof RootMutations>(
    key: K,
    payload: Parameters<RootMutations[K]>[1],
    options: { root: true }
  ): ReturnType<RootMutations[K]>
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>
