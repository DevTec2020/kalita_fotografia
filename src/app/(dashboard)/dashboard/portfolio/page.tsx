import { GalleryProvider } from "@/domain/portfolio_management/hooks/useGalleryProvider";
import { PortfolioManagementUI } from "@/domain/portfolio_management/PortfolioManagement";

export default function PortfolioManagementPage(){
  return(
    <main>
      <GalleryProvider>
         <PortfolioManagementUI />
      </GalleryProvider>
     
    </main>
  )
}