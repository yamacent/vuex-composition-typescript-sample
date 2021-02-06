<template>
  <header style="background: #ddd">
    <nav>
      <router-link to="/" style="margin-right: 1rem">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    counter: {{ counter }} doubledCounter: {{ doubledCounter }}
  </header>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const counter = computed(() => store.state.counter)
    const doubledCounter = computed(() => store.getters.doubledCounter)
    return {
      counter,
      doubledCounter
    }
  }
})
</script>
