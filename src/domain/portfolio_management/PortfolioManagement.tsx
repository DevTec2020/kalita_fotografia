import AddButtonPortfolio from "./components/ButtonAdd";
import DeleteButtonPortfolio from "./components/ButtonDelete";
import SelectAllButtonPortfolio from "./components/ButtonSelectAll";
import GalleryGrid from "./components/GalleryGrid";
import { GalleryProvider } from "./hooks/useGalleryProvider";


export default function PortfolioManagement() {
  return (
    <GalleryProvider>
      <PortfolioManagementUI />
    </GalleryProvider>
  );
}

function PortfolioManagementUI() {
  return (
    <section className="flex justify-end w-full">
      <div
        className="
          w-full lg:w-9/12 
          px-4 sm:px-8 md:px-16 lg:px-28 xl:px-36 
          py-10 lg:py-15 
          bg-kalita-portfolio
        "
      >
        <div className="flex flex-col gap-10 items-center w-full">
          
          {/* HEADER */}
          <div
            className="
              flex flex-col sm:flex-row 
              w-full items-start sm:items-center 
              justify-between gap-6
            "
          >
            <div className="flex flex-col w-full sm:w-72">
              <span className="font-nunito text-2xl md:text-3xl text-kalita-brown-dark leading-[1.5]">
                Gestão de Portfólio
              </span>

              <span className="font-nunito text-sm md:text-base text-kalita-brown-dark leading-[1.5]">
                Gerencie suas fotos de portfólio.
              </span>
            </div>
          </div>

          <div
            className="
              flex w-full 
              h-auto lg:h-[40.625rem]
              border border-kalita-bg-light-brown 
              rounded-lg 
              bg-kalita-bg-medium
            "
          >
            <div className="w-full h-full px-6 md:px-10 lg:px-12 py-8 md:py-10 lg:py-12">
              <div className="flex justify-between items-center">
                <AddButtonPortfolio />

                <div className="flex gap-4 items-center">
                  <SelectAllButtonPortfolio />

                  <DeleteButtonPortfolio />
                </div>
              </div>

              {/* DROPZONE + GRID */}
              <div className="w-full mt-6">
                <GalleryGrid />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
