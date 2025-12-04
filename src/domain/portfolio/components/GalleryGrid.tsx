"use client";

import { useGallery } from "../hooks/useGalleryProvider";
import Image from "next/image";
import { GoCheck } from "react-icons/go";
import DropzonePortfolio from "./Dropzone";

export default function GalleryGrid() {
  const { images, toggleSelect } = useGallery();

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <DropzonePortfolio />
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-2 sm:grid-cols-3 md:grid-cols-3
        lg:grid-cols-3 xl:grid-cols-3
        gap-4 w-full mt-10
      "
    >
      {images.map(img => {
        const isSelected = img.selected;

        return (
          <div
            key={img.id}
            onClick={() => toggleSelect(img.id)}
            className={`
              relative w-full aspect-square
              overflow-hidden rounded-md cursor-pointer 
              transition-all duration-150

              ${isSelected
                ? "ring-2 ring-kalita-brown-dark shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                : "border border-kalita-bg-light-brown"}
            `}
          >
            <button
              onClick={e => {
                e.stopPropagation();
                toggleSelect(img.id);
              }}
              aria-label={isSelected ? "Desmarcar imagem" : "Selecionar imagem"}
              className={`
                absolute top-2 left-2 z-20
                w-6 h-6 rounded-sm
                flex items-center justify-center
                ${isSelected
                  ? "bg-white border border-kalita-brown-dark"
                  : "bg-white/95 border border-kalita-brown-light"}
                shadow-sm
              `}
            >
              {isSelected && <GoCheck size={14} className="text-kalita-brown-dark" />}
            </button>

            <Image
              src={img.preview}
              alt="preview"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
