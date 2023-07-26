<template>
  <div class="align-middle items-center w-full" v-if="isLoading">
    <p class="text-[12px] mb-[30px] font-medium text-gray-1">Uploading...</p>
    <div class="w-full bg-gray-3 rounded-full h-2.5 dark:bg-gray-700 transition-all">
      <div class="bg-primary h-2.5 rounded-full transition-all" :class="progress"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { useImageStore } from '../store';


const store = useImageStore()

const { isLoading, progress } = storeToRefs(store)

</script>

<style scoped></style>
