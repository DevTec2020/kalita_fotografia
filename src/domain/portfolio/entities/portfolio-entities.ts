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

export interface PhotoInDb {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  asset_folder: string;
  display_name: string;
  url: string;
  secure_url: string;
}


export interface SuccessPortfolioResponse extends PortfolioUploadResponse  {
  data : UploadedPortfolioImageInDB [] | []
}

export interface CloudinaryResponse extends PortfolioUploadResponse {
    data : PhotoInDb[]
}

