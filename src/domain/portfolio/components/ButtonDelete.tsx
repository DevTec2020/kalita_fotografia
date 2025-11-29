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
          px-4 py-2
          bg-red-600
          text-white 
          rounded-md
          hover:bg-red-700
          transition
        "
      >
        <FiTrash2 size={18} />
        <span>Excluir</span>

        <span className="text-sm opacity-90">
          ({selectedIds.length})
        </span>
      </button>

      {/* MODAL */}
      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        ids={selectedIds} 
      />
    </>
  );
}
