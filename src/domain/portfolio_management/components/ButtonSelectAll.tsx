"use client";

import { GoCheck } from "react-icons/go";
import { useGallery } from "../hooks/useGalleryProvider";

export default function SelectAllButtonPortfolio() {
  const { images, selectedIds, toggleSelectAll } = useGallery();

  const countSelected = selectedIds.length;
  const hasSelection = countSelected > 0;
  const allSelected = images.length > 0 && countSelected === images.length;

  return (
    <button
      onClick={toggleSelectAll}
      className="
        flex items-center gap-3
        px-4 py-2
        bg-kalita-brown-dark
        text-white 
        rounded-lg
        hover:bg-kalita-brown-medium
        transition-all
        select-none
      "
    >

      <div
        className={`
          w-5 h-5 flex items-center justify-center 
          rounded-md border border-white
          text-kalita-brown-dark
          transition-all
          ${allSelected ? "bg-white" : "bg-transparent"}
        `}
      >
        {allSelected && <GoCheck size={14} />}
      </div>

      <span>
        {allSelected ? "Desmarcar todas" : "Selecionar todas"}
      </span>

      {hasSelection && (
        <span className="text-xs opacity-70">
          ({countSelected})
        </span>
      )}
    </button>
  );
}
