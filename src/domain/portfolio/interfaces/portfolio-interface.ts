import type {  CloudinaryResponse, PhotoInDb, RequestPortfolio, SuccessPortfolioResponse } from "../entities/portfolio-entities";


export interface IPortfolioRepository {
  uploadMultiples(uploadFiles : RequestPortfolio):Promise<SuccessPortfolioResponse>;
  getAllPortfolioPhotos():Promise<PhotoInDb[]>
}