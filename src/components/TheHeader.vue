<template>
  <header style="background: #ddd">
    <nav>
      <router-link to="/" style="margin-right: 1rem">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    counter: {{ counter }}
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const counter = computed(() => store.state.counter)
    return {
      counter
    }
  }
})
</script>
