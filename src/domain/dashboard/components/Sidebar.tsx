
import Image from "next/image";
import { MdLogout } from "react-icons/md";
import { Navbar } from "./NavBar";
import { MenuDashboardButton } from "./MenuDashboardButton";

export function Sidebar() {


  return (
    <>
      <aside className="flex flex-col md:flex-row md:min-h-screen">
        <div
          className='flex flex-col justify-between bg-white md:w-[25%] min-w-[260px] py-10 h-[100px] md:h-screen md:items-center'
        >
          <div className="px-8">
            <header className="flex justify-between items-center gap-1">

              <div className="hidden md:block">
                <Image
                  src='/kalita-logo.svg'
                  alt='Logo da kalita'
                  width={90}
                  height={90}
                  priority
                />
              </div>

              <div className="md:hidden">
                <MenuDashboardButton />
              </div>

              <h1 className="text-kalita-brown-dark text-lg font-semibold">Área Administrativa</h1>
            </header>

            <div className="hidden md:block">
              <Navbar />
            </div>
          </div>

          <div className="hidden md:block border-t border-kalita-bg-light-brown w-full pt-6 px-8">
            <button className="flex items-center gap-2 text-[15px] cursor-pointer text-base text-kalita-brown-dark font-bold">
              <MdLogout />
              Sair
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}