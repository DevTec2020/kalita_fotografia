export interface GalleryImage {
  id: string;
  file: File;
  preview: string;
  selected: boolean;
}

export interface GalleryContextData {
  images: GalleryImage[];
  selectedIds: string[];

  addImage: (file: File) => void;
  toggleSelect: (id: string) => void;
  toggleSelectAll: () => void;
  removeImages: (ids: string[]) => void;
}
