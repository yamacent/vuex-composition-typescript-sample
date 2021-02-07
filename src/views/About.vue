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

    return {
      double: () => 1
    }
  }
})
</script>
