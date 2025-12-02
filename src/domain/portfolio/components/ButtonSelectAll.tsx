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
        px-4 md:px-5 py-2 md:py-2.5
        bg-kalita-brown-dark text-kalita-bg-light
        font-nunito
        rounded-lg
        cursor-pointer
        transition-all duration-200
        hover:bg-kalita-brown-medium
        select-none
      "
    >

      <div
        className={`
          w-5 h-5 md:w-6 md:h-6
          flex items-center justify-center
          rounded-md border border-white
          transition-all
          ${allSelected ? "bg-white" : "bg-transparent"}
        `}
      >
        {allSelected && (
          <GoCheck
            size={14}
            className="text-kalita-brown-dark"
          />
        )}
      </div>

      <span className="text-sm md:text-base whitespace-nowrap">
        {allSelected ? "Desmarcar todas" : "Selecionar todas"}
      </span>

      {hasSelection && (
        <span className="text-xs md:text-sm opacity-80">
          ({countSelected})
        </span>
      )}
    </button>
  );
}
