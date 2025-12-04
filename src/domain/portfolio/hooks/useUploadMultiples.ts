import { usePortfolioService } from "@/domain/container"
import { useMutation } from "@tanstack/react-query"
import type { RequestPortfolio } from "../entities/portfolio-entities"

export const portfolioMutation = usePortfolioService

export const useUploadMultiples  = () =>{
  const {isPending, isError, mutate, isSuccess} = useMutation({
      mutationFn : (data : RequestPortfolio) => 
        portfolioMutation.uploadMultiples(data)
  })

  return {isPending, isError, mutate, isSuccess}
}

