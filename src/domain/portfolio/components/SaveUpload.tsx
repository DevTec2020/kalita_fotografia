"use client";
import { Loader, Save } from "lucide-react";
import { useGallery } from "../hooks/useGalleryProvider";
import { useUploadMultiples } from "../hooks/useUploadMultiples";
import { useEffect } from "react";

export const SaveUpload = () => {

  const { mutate, isPending, isSuccess, isError } = useUploadMultiples();

  useEffect(() => {
    if (isSuccess) {
      alert('Sucesso ao Enviar')
    }
  }, [isSuccess])


  const { images } = useGallery();
  if (!images || images.length === 0) return null;

  const handleSaveUploads = () => {
    const newFormData = new FormData();

    images.forEach((item, index) => {
      newFormData.append('files', item.files);
      console.log(index)
    });

    newFormData.append('category', 'uploads');

    mutate(newFormData as any);
  };

  return (
   <button
  type="button"
  onClick={handleSaveUploads}
  className="
    w-52 h-10 px-8 py-4 rounded-md
    bg-kalita-brown-medium
    cursor-pointer select-none

    flex items-center justify-center

    transition-all duration-200 ease-out
    hover:bg-kalita-brown-dark
    active:scale-[0.97]

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-kalita-brown-light
    focus-visible:ring-offset-2

    disabled:opacity-60
    disabled:cursor-not-allowed
    disabled:hover:bg-kalita-brown-medium
  "
>
  <div className="flex h-full justify-center items-center">
    {isPending ? (
      <div className="flex w-full gap-2 items-center">
        <span><Loader className="animate-spin" color="#FFF" /></span>
        <span className="font-nunito font-normal leading-[1.5rem] text-kalita-bg-light text-[0.875rem]">
          Carregando...
        </span>
      </div>
    ) : (
      <div className="flex w-full gap-2 items-center">
        <span className="-rotate-y-180"><Save color="#FFF" /></span>
        <span className="font-nunito font-normal leading-[1.5rem] text-kalita-bg-light text-[0.875rem]">
          Salvar Alterações
        </span>
      </div>
    )}
  </div>
</button>

  );
};
