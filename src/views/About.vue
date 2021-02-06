<template>
  <div>
    <button @click="double">double</button>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      double: () => store.commit('doubleCounter', undefined)
    }
  }
})
</script>
