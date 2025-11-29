export interface GalleryImage {
  id: string;
  files: File;
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


export interface PortfolioUploadResponse  {
  success : boolean;
  message : string;
}

export interface RequestPortfolio{
  category : string,
  files : File[] | File
}

export interface UploadedPortfolioImageInDB  {
  url : string;
  publicId : string;
  format : string,
  bytes : number
}

export interface SuccessPortfolioResponse extends PortfolioUploadResponse  {
  data : UploadedPortfolioImageInDB [] | []
}

