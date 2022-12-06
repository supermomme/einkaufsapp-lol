<script setup lang="ts">
import { ref, computed } from "vue";

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  activeColor: { type: String, default: 'indigo-600' }
})

console.log(props.activeColor)

const value = computed({ 
  get: () => props.modelValue, 
  set: (value) => emit('update:modelValue', value) 
}) 



function toggle() {
  value.value = !value.value
  
}
</script>

<!-- :class="value ? 'bg-'+props.activeColor : 'bg-gray-200'" -->


<template>
  <button
    @click="toggle"
    :aria-checked="value"
    type="button"
    :class="`bg-gray-200 aria-checked:bg-${props.activeColor} inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`"
    role="switch"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="value ? 'translate-x-5' : 'translate-x-0'"
      class="pointer-events-none h-5 w-5 transform rounded-full bg-white ring-0 transition duration-200 ease-in-out"
    />
  </button>
</template>
