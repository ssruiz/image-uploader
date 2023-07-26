import { useDropZone } from '@vueuse/core';

import { VNodeRef, ref } from 'vue';
import { useImageStore } from '../store';

const VALID_FORMATS = ['image/png', 'image/jpeg'];

const useFiles = () => {
  const store = useImageStore();

  const imageDropZone = ref<HTMLDivElement>();

  const uploading = ref(false);

  const formatError = ref(false);
  const refFileInput = ref<VNodeRef | undefined>(undefined);

  const uploadFile = async (imageFile: File) => {
    formatError.value = false;
    if (!validateFormat(imageFile.type)) {
      formatError.value = true;
      return;
    }
    store.toogleLoading();
    return new Promise((resolve) => {
      formatError.value = false;
      setTimeout(() => {
        store.setProgress('w-1/5');
      }, 100);
      setTimeout(() => {
        store.setProgress('w-2/5');
      }, 1000);

      setTimeout(() => {
        store.setProgress('w-3/5');
      }, 1800);

      setTimeout(() => {
        uploading.value = true;
        const uploadedImage = URL.createObjectURL(imageFile);
        store.setProgress('w-full');
        store.setImage(uploadedImage);

        store.toogleLoading();
        resolve('');
      }, 3000);
    });
  };

  const selectFileFromInput = () => {
    if (refFileInput.value) refFileInput.value.click();
  };

  const uploadFileFromInput = () => {
    if (refFileInput.value) onDropImage(refFileInput.value.files);
  };

  const onDropImage = (files: File[] | null) => {
    if (files) {
      const imageFile: File = files[0];
      uploadFile(imageFile);
    }
  };

  const validateFormat = (type: string) => VALID_FORMATS.includes(type);

  const { isOverDropZone } = useDropZone(imageDropZone, onDropImage);

  return {
    selectFileFromInput,
    uploadFileFromInput,
    isOverDropZone,
    imageDropZone,
    formatError,
    refFileInput,
  };
};

export default useFiles;
