<template>
  <div
    class="flex items-center justify-center place-self-center size-12 cursor-pointer bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-all"
    :class="value?.length === 1 ? 'text-2xl' : 'text-xl'" @click="$emit('click', value)">
    {{ value }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  value: {
    type: String
  }
})
defineEmits(['click'])
</script>

<style></style>