"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { useGallery } from "../hooks/useGalleryProvider";

export default function DropzonePortfolio() {
  const { addImage } = useGallery();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach(file => addImage(file));
    },
    [addImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        cursor-pointer
        flex flex-col items-center justify-center
        border-2 border-dashed border-kalita-brown-light
        rounded-md
        bg-kalita-bg-light
        transition
        hover:border-kalita-brown-dark
        hover:bg-kalita-bg-medium
        p-4
        w-full h-full
      `}
    >
      <input {...getInputProps()} />

      <FiUpload size={28} className="text-kalita-brown-dark opacity-80" />

      <span className="text-sm text-kalita-brown-dark mt-2 opacity-80">
        {isDragActive ? "Solte para enviar" : "Adicionar fotos"}
      </span>
    </div>
  );
}
