<template>
  <TheHeader />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from './components/TheHeader.vue'

export default defineComponent({
  components: { TheHeader }
})
</script>

<style>
body {
  margin: 0;
}
</style>
