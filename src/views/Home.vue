<template>
  <div>
    count: {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const count = computed(() => store.state.moduleA.count)
    return {
      count,
      increment: () => store.commit('moduleA/setCount', count.value + 1)
    }
  }
})
</script>
