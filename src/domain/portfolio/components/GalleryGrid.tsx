"use client";

import { useGallery } from "../hooks/useGalleryProvider";
import DropzonePortfolio from "./Dropzone";
import Image from "next/image";
import { GoCheck } from "react-icons/go";

export default function GalleryGrid() {
  const { images, toggleSelect } = useGallery();

  return (
    <div
      className="
        grid 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
        gap-4
      "
    >

      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <DropzonePortfolio />
      </div>

      {images.map((img) => {
        const isSelected = img.selected;

        return (
          <div
            key={img.id}
            onClick={() => toggleSelect(img.id)}
            className={`
              relative w-full aspect-square 
              overflow-hidden rounded-md cursor-pointer 
              transition-all duration-150

              ${
                isSelected
                  ? "ring-2 ring-blue-500/80 shadow-lg shadow-blue-500/20"
                  : "ring-1 ring-transparent"
              }
            `}
          >

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSelect(img.id);
              }}
              className="
                absolute top-2 left-2 z-20 
                w-5 h-5 rounded 
                flex items-center justify-center
                bg-white/90 border border-gray-300
                shadow-sm
              "
            >
              {isSelected && <GoCheck size={14} className="text-blue-600" />}
            </button>

            <Image
              src={img.preview}
              alt="preview"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
