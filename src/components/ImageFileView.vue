<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center mb-[30px]">
      <p class="text-title-text text-gray-1 font-medium mb-[16px]">Upload your image</p>
      <p class="text-subtitle text-gray-2 font-medium">File should be Jpeg, Png...</p>
      <p v-if="formatError" class="text-red-500 text-action">Invalid format!</p>
    </div>

    <div
      class="outline-caption border-dashed w-[330px] h-[218px] bg-gray-4 rounded-xl outline-dashed flex flex-col py-[36px] text-center transition-all"
      ref="imageDropZone" :class="{ 'outline-primary': isOverDropZone }">
      <img src="../assets/image.svg" class="h-[88px] w-[114] mb-[37px]" alt="Image Placeholder" />


      <p class="text-action text-gray-3 font-medium">Drag & Drop your image here</p>
    </div>

    <p class="mt-[18px] mb-[21px] text-action text-gray-3">Or</p>


    <button class="w-[101px] h-[32px] bg-primary text-white rounded-lg text-action hover:bg-blue-500 transition"
      @click="selectFileFromInput()">Choose
      a
      file</button>
    <input ref="refFileInput" id="dropzone-file" type="file" class="hidden" @change="uploadFileFromInput()"
      accept="image/png, image/jpeg" />
  </div>
</template>



<script setup lang="ts">
import useFiles from '../composables/useFiles';


const { uploadFileFromInput, imageDropZone, isOverDropZone, selectFileFromInput, formatError, refFileInput } = useFiles()



</script>