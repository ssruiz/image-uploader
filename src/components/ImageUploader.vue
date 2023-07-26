<template>
  <div class="h-screen bg-slate-100  flex justify-center items-center">

    <div
      class="bg-slate-100 min-h-[143px] min-w-[400px]  border border-gray-5 rounded-xl px-[32px] py-[36px] shadow-card flex justify-center items-center">

      <ImageFileView v-if="!imageUrl && !isLoading" />
      <SucessfullUpload v-if="imageUrl && !isLoading" />

      <ProgressBar v-if="isLoading" />
    </div>

  </div>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { useImageStore } from '../store';
import ImageFileView from './ImageFileView.vue';
import SucessfullUpload from './SucessfullUpload.vue';
import ProgressBar from './ProgressBar.vue';

const store = useImageStore()

const { imageUrl, isLoading } = storeToRefs(store)

</script>

<style scoped></style>

