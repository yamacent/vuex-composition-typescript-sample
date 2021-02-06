<template>
  <div>
    <button @click="double">double</button>
    <button @click="fetch">fetch</button>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()

    console.log(store.getters['moduleA/doubledCounter'])

    return {
      double: () => store.commit('doubleCounter', undefined),
      fetch: () => store.dispatch('moduleA/getCounter', undefined)
    }
  }
})
</script>
