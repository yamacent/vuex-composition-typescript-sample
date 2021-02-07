<template>
  <div>
    <ul>
      <li>{{ user }}</li>
      <li>{{ book }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from './store'

export default defineComponent({
  setup() {
    const store = useStore()

    store.dispatch('getUser', 'abc123')
    store.dispatch('moduleA/getBook')

    const user = computed(() => store.getters.userInfo)
    const book = computed(() => store.getters['moduleA/bookTitle'])

    return {
      user,
      book
    }
  }
})
</script>
