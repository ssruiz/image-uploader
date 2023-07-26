import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useImageStore = defineStore('image', () => {
  const imageUrl = ref('');
  const isLoading = ref(false);
  const progress = ref('w-0');

  function toogleLoading() {
    isLoading.value = !isLoading.value;
  }

  function setImage(image: string) {
    imageUrl.value = image;
  }

  function setProgress(_progress: string) {
    progress.value = _progress;
  }

  return {
    imageUrl,
    isLoading,
    toogleLoading,
    setImage,
    progress,
    setProgress,
  };
});
