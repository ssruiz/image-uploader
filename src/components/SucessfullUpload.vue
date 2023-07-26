<template>
  <div class="flex flex-col justify-center items-center w-[401px]">
    <img
      src="../assets/success.svg"
      class="h-[42px] w-full mb-[7px]"
      alt="Image Placeholder"
    />
    <p class="text-title text-gray-1 font-medium mb-[25px]">Uploaded Successfully!</p>

    <div class="max-h-[224] w-full mb-[27px] bg-red-500 shadow-card rounded-full">
      <img :src="imageUrl" class="object-cover rounded-xl" alt="Image Uploaded" />
    </div>

    <div
      class="w-full h-[34px] pl-2 rounded-xl border border-gray-6 gap-1 grid grid-cols-10 items-center"
    >
      <p class="text-[8px] text-gray-1 truncate col-span-8">{{ imageUrl }}</p>
      <button
        class="bg-primary rounded-xl h-[34px] col-span-2 text-white text-center text-[10px] font-medium hover:bg-primary/90 transition"
        @click="handleCopy"
      >
        Copy Link
      </button>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="animate-fade-up animate-duration-200"
        leave-active-class="opacity-0 translate-y-10 bot transition duration-200"
      >
        <div
          v-if="open"
          class="px-2 py-3 fixed right-2 bottom-2 w-[150px] text-white rounded-md bg-primary shadow-md"
        >
          <p class="text-xs text-center">Copied to clipboard!</p>
        </div></Transition
      >
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useImageStore } from "../store";

import { useClipboard } from "@vueuse/core";
import { ref } from "vue";

const store = useImageStore();

const { imageUrl } = storeToRefs(store);

const source = ref(imageUrl);
const open = ref(false);

function handleCopy() {
  copy(source.value);
  open.value = true;

  setTimeout(() => {
    open.value = false;
  }, 3000);
}

const { copy } = useClipboard({ source });
</script>
