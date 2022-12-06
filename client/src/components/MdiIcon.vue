<script setup lang="ts">
const props = defineProps({
  d: { type: String, required: true },
})
</script>

<template>
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" :d="props.d" />
  </svg>
</template>
