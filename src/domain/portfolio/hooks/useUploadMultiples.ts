import { usePortfolioService } from "@/domain/container"
import { useMutation } from "@tanstack/react-query"
import type { PortfolioUploadResponse, RequestPortfolio } from "../entities/portfolio-entities"

export const useUploadMultiples  = () =>{
  const portfolioMutation = usePortfolioService
  const {isPending, isError, mutate} = useMutation({
      mutationFn : (data : RequestPortfolio) => 
        portfolioMutation.uploadMultiples(data)
  })

  return {isPending, isError, mutate}
}