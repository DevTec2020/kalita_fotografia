"use client";
import { Loader, Save } from "lucide-react";
import { useGallery } from "../hooks/useGalleryProvider";
import { useUploadMultiples } from "../hooks/useUploadMultiples";

export const SaveUpload = () => {
  const { mutate, isPending, isError } = useUploadMultiples();

  const { images } = useGallery();
  if (!images || images.length === 0) return null;

  const handleSaveUploads = () => {
  const newFormData = new FormData();
    
  images.forEach((item, index) => {
    newFormData.append('files', item.files);
  });

  newFormData.append('category', 'uploads');
  
  mutate(newFormData as any);
};
  return (
    <button
      type="button"
      onClick={handleSaveUploads}
      className="border rounded-md px-2 py-2 flex justify-center items-center gap-2"
    >
      {isPending ? (
        <span>
          <Loader />
          Caregando...
        </span>
      ) : (
        <span>
          <Save /> Salvar Alterações
        </span>
      )}
    </button>
  );
};
