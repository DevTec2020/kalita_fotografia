"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { v4 as uuid } from "uuid";
import type { GalleryContextData, GalleryImage } from "../entities/portfolio-entities";

const GalleryContext = createContext<GalleryContextData | null>(null);

export function GalleryProvider({ children }: { children: ReactNode }) {

  const [images, setImages] = useState<GalleryImage[]>([]);

  const selectedIds = images.filter(img => img.selected).map(img => img.id);

  function addImage(file: File) {
    const newImg: GalleryImage = {
      id: uuid(),
      files: file,
      preview: URL.createObjectURL(file),
      selected: false,
    };
    setImages(prev => [...prev, newImg]);
  }


  //TODO: DUVIDA
  function toggleSelect(id: string) {
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, selected: !img.selected } : img
      )
    );
  }

  function toggleSelectAll() {
    const allSelected = images.every(img => img.selected);

    setImages(prev =>
      prev.map(img => ({
        ...img,
        selected: !allSelected,
      }))
    );
  }

  function removeImages(ids: string[]) {
    setImages(prev => prev.filter(img => !ids.includes(img.id)));
  }

  return (
    <GalleryContext.Provider
      value={{
        images,
        selectedIds,
        addImage,
        toggleSelect,
        toggleSelectAll,
        removeImages,
      }}
    >

      {children}
    </GalleryContext.Provider>
  );
}


export function useGallery() {
  const ctx = useContext(GalleryContext);
  if (!ctx) throw new Error("useGallery deve estar dentro de <GalleryProvider>");
  return ctx;
}
