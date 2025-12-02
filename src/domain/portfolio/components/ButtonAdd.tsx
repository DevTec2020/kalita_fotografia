"use client";

import { FiUpload } from "react-icons/fi";
import { useRef } from "react";
import { useGallery } from "../hooks/useGalleryProvider";

export default function AddButtonPortfolio() {
  const { addImage, images } = useGallery();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (images.length >= 30) return;
    fileInputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (images.length < 30) addImage(file);

    e.target.value = "";
  }

  const isDisabled = images.length >= 30;

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`
        flex items-center justify-center gap-2
        px-4 md:px-5 py-2 md:py-2.5
        text-kalita-bg-light
        rounded-md font-nunito
        transition-all duration-200

        ${isDisabled
          ? "opacity-40 cursor-not-allowed bg-kalita-brown-dark"
          : "cursor-pointer bg-kalita-brown-dark hover:bg-kalita-brown-medium"
        }
      `}
    >
      <FiUpload size={18} className="shrink-0" />
      <span className="whitespace-nowrap text-kalita-bg-light text-sm md:text-base">
        Adicionar fotos
      </span>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </button>
  );
}
