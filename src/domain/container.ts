import { ApiInstance } from "./apiInstance";
import { ContactUseCase } from "./contact/use-cases/contact-use-case";
import { PortfolioService } from "./portfolio/portfolio-use-case/use-case";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const useContactInstance = ApiInstance.getInstance(API_URL)
export const useApiContactService = new ContactUseCase(useContactInstance)

const usePortfolioInstance = ApiInstance.getInstance(API_URL)
export const usePortfolioService = new PortfolioService(usePortfolioInstance)
