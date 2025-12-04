"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { useGallery } from "../hooks/useGalleryProvider";

export default function DropzonePortfolio() {
  const { addImage, images } = useGallery();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (images.length >= 30) return;

      const availableSlots = 30 - images.length;

      acceptedFiles.slice(0, availableSlots).forEach(file => addImage(file));
    },
    [addImage, images]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    disabled: images.length >= 30,
  });

  const isDisabled = images.length >= 30;

  return (
    <div
      {...getRootProps()}
      role="button"
      aria-label="Dropzone de imagens"
      className={`
        w-full
        flex flex-col items-center justify-center
        border-2 border-dashed rounded-xl
        p-8 md:p-12
        transition-all duration-200 ease-out
        text-center select-none

        ${isDragActive
          ? "border-kalita-brown-dark bg-kalita-bg-medium"
          : "border-kalita-brown-light bg-kalita-bg-light"}

        ${!isDisabled && "hover:bg-kalita-bg-medium/40 hover:border-kalita-brown-dark"}

        ${isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer"}
      `}
    >
      <input {...getInputProps()} />

      <FiUpload
        size={32}
        className={`
          mb-4 transition
          ${isDisabled ? "opacity-50" : "text-kalita-brown-dark opacity-80"}
        `}
      />

      <div className="max-w-[40rem] font-nunito">
        {isDisabled ? (
          <p className="text-sm text-kalita-brown-medium">
            Limite máximo de 30 imagens atingido.
          </p>
        ) : (
          <>
            <p className="text-sm text-kalita-brown-medium">
              {isDragActive
                ? "Solte os seus arquivos aqui"
                : "Arraste os seus arquivos aqui ou"}
            </p>

            {!isDragActive && (
              <>
                <p className="text-sm text-kalita-brown-medium">
                  busque diretamente em seu
                </p>

                <p className="text-sm text-kalita-brown-dark font-bold underline mt-1">
                  navegador
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
