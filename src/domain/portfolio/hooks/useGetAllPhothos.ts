import { useQuery } from "@tanstack/react-query"
import { portfolioMutation } from "./useUploadMultiples"

export const useGetAllPhotos = () =>{
  const {data, isError, isLoading, refetch} = useQuery({
    queryKey : ['all-photos'],
    queryFn : () => portfolioMutation.getAllPortfolioPhotos()
  })

  return {data, isError, isLoading, refetch}
}