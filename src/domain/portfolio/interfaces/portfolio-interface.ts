import type {  RequestPortfolio, SuccessPortfolioResponse } from "../entities/portfolio-entities";


export interface IPortfolioRepository {
  uploadMultiples(uploadFiles : RequestPortfolio):Promise<SuccessPortfolioResponse>
}