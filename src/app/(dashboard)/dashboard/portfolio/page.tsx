import { GalleryProvider } from "@/domain/portfolio/hooks/useGalleryProvider";
import { PortfolioManagementUI } from "@/domain/portfolio/PortfolioManagement";


export default function PortfolioManagementPage(){
  return(
    <main>
      <GalleryProvider>
         <PortfolioManagementUI />
      </GalleryProvider>
     
    </main>
  )
}