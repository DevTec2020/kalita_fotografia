"use client";

import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import { useGallery } from "../hooks/useGalleryProvider";
import DeleteModal from "./DeleteModal";

export default function DeleteButtonPortfolio() {
  const { selectedIds, removeImages } = useGallery();
  const [open, setOpen] = useState(false);

  if (selectedIds.length === 0) return null;

  function handleClick() {
    if (selectedIds.length === 1) {
      removeImages([selectedIds[0]]);
      return;
    }
    setOpen(true);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="
          flex items-center gap-2
          px-4 md:px-5 py-2 md:py-2.5
          rounded-md
          bg-red-600 text-kalita-bg-light
          font-nunito 
          cursor-pointer
          transition-all duration-200
          hover:bg-red-700
        "
      >
        <FiTrash2 size={18} className="shrink-0" />

        <span className="text-sm md:text-base whitespace-nowrap">
          Excluir
        </span>

        <span className="text-xs md:text-sm opacity-90">
          ({selectedIds.length})
        </span>
      </button>

      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        ids={selectedIds}
      />
    </>
  );
}
