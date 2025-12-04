"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { GalleryContextData, GalleryImage } from "../entities/portfolio-entities";

const GalleryContext = createContext<GalleryContextData | undefined>(undefined);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // -----------------------------
  // ADD IMAGE (LIMIT: 30)
  // -----------------------------
  const addImage = useCallback((file: File) => {
    // impede ultrapassar 30 imagens
    if (images.length >= 30) return;

    const newImage: GalleryImage = {
      id: uuidv4(),
      files: file,
      preview: URL.createObjectURL(file),
      selected: false,
    };

    setImages(prev => [...prev, newImage]);
  }, [images]);

  // -----------------------------
  // SELECT / UNSELECT
  // -----------------------------
  const toggleSelect = useCallback((id: string) => {
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, selected: !img.selected } : img
      )
    );

    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(selectedId => selectedId !== id)
        : [...prev, id]
    );
  }, []);

  // -----------------------------
  // SELECT / UNSELECT ALL
  // -----------------------------
  const toggleSelectAll = useCallback(() => {
    const allSelected = selectedIds.length === images.length;

    if (allSelected) {
      setImages(prev => prev.map(img => ({ ...img, selected: false })));
      setSelectedIds([]);
    } else {
      setImages(prev => prev.map(img => ({ ...img, selected: true })));
      setSelectedIds(images.map(img => img.id));
    }
  }, [images, selectedIds]);

  // -----------------------------
  // REMOVE MULTIPLE IMAGES
  // -----------------------------
  const removeImages = useCallback((ids: string[]) => {
    setImages(prev => prev.filter(img => !ids.includes(img.id)));
    setSelectedIds(prev => prev.filter(id => !ids.includes(id)));
  }, []);

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

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used inside GalleryProvider");
  }
  return context;
};
