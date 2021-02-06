<template>
  <header style="background: #ddd">
    <nav>
      <router-link to="/" style="margin-right: 1rem">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    User: {{ userInfo }}
  </header>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const userInfo = computed(() => store.getters.userInfo)

    store.dispatch('getUser', 'abc123')

    return {
      userInfo
    }
  }
})
</script>
