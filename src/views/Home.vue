<template>
  <div>user: {{ user }} bookTitle: {{ bookTitle }}</div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()

    // root commit
    store.commit('setUser', { id: 'def456', name: 'foobar' }) // has payload
    // store.commit('setUser') // error
    store.commit('resetUser') // no payload

    // root dispatch
    store.dispatch('getUser', 'abc123')
    // store.dispatch('getUser') // error
    // module dispatch
    store.dispatch('moduleA/getBook') // no payload

    // root getter
    const user = computed(() => store.getters.userInfo)
    // module getter
    const bookTitle = computed(() => store.getters['moduleA/bookTitle'])

    return {
      user,
      bookTitle
    }
  }
})
</script>
