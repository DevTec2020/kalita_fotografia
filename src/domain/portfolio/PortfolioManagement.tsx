"use client"
import AddButtonPortfolio from "./components/ButtonAdd";
import DeleteButtonPortfolio from "./components/ButtonDelete";
import SelectAllButtonPortfolio from "./components/ButtonSelectAll";
import GalleryGrid from "./components/GalleryGrid";
import { SaveUpload } from "./components/SaveUpload";

export function PortfolioManagementUI() {
  return (
    <section className="flex justify-end w-[832px] mx-auto pt-15">
      <div className="flex flex-col gap-10 items-center w-full">

        <header
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

          <SaveUpload />

        </header>

        <div
          className="  flex w-full min-h-[30rem] lg:h-[40.625rem] border border-kalita-bg-light-brown rounded-lg bg-kalita-bg-medium"
        >
          <div className="w-full h-full px-6 md:px-10 lg:px-12 py-8 md:py-10 lg:py-12 flex flex-col">

            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <AddButtonPortfolio />
                <DeleteButtonPortfolio />
              </div>

              <div className="flex items-center">
                <SelectAllButtonPortfolio />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mt-8">
              <GalleryGrid />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
