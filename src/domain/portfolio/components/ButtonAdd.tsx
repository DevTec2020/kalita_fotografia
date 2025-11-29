"use client";

import { FiUpload } from "react-icons/fi";
import { useRef } from "react";
import { useGallery } from "../hooks/useGalleryProvider";

export default function AddButtonPortfolio() {
  const { addImage } = useGallery();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    fileInputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    addImage(file);
    e.target.value = "";
  }

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center gap-2
        bg-kalita-brown-dark
        text-white
        px-4 py-2
        rounded-md
        hover:bg-kalita-brown-medium
        transition
      "
    >
      <FiUpload size={18} />
      <span>Adicionar Fotos</span>

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
