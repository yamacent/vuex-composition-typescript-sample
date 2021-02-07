import {
  Action,
  ActionContext,
  ActionObject,
  ActionTree,
  CommitOptions,
  DispatchOptions,
  GetterTree,
  MutationTree
} from 'vuex'
import { RootActions, RootGetters, RootMutations, RootState } from '.'

export type PayloadAndOptionsTuple<
  Payload,
  Options extends CommitOptions | DispatchOptions
> = Payload extends undefined ? [undefined?, Options?] : [Payload, Options?]

type ExtractActionHandler<A> = A extends Action<infer S, infer R>
  ? A extends ActionObject<S, R>
    ? A['handler']
    : A
  : never

export type AugmentedModuleActionContext<
  State,
  Mutations extends MutationTree<State>,
  Actions extends ActionTree<State, RootState>,
  Getters extends GetterTree<State, RootState>
> = {
  commit<
    K extends keyof RootMutations,
    P extends Parameters<RootMutations[K]>[1],
    O extends CommitOptions & { root: true }
  >(
    key: K,
    payload: P,
    options: O
  ): ReturnType<RootMutations[K]>
  commit<
    K extends keyof Mutations,
    P extends Parameters<Mutations[K]>[1],
    O extends CommitOptions & { root: false }
  >(
    key: K,
    ...params: PayloadAndOptionsTuple<P, O>
  ): ReturnType<Mutations[K]>
  dispatch<
    K extends keyof RootActions,
    P extends Parameters<RootActions[K]>[1],
    O extends DispatchOptions & { root: true }
  >(
    key: K,
    payload: P,
    options: O
  ): ReturnType<RootActions[K]>
  dispatch<
    K extends keyof Actions,
    P extends Parameters<ExtractActionHandler<Actions[K]>>[1],
    O extends DispatchOptions & { root: false }
  >(
    key: K,
    ...params: PayloadAndOptionsTuple<P, O>
  ): ReturnType<ExtractActionHandler<Actions[K]>>
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
  rootGetters: {
    [K in keyof RootGetters]: ReturnType<RootGetters[K]>
  }
} & Omit<
  ActionContext<State, RootState>,
  'commit' | 'dispatch' | 'getters' | 'rootGetters'
>
