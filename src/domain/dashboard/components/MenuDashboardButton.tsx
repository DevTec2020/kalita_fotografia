'use client'

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";

import { BsLayoutSidebar } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { sidebarLinks } from "./sidebar.contents";


export const MenuDashboardButton = memo(function MenuDashboardButton() {
  const [open, setOpen] = useState<boolean>(false);

  function handleMenuButtonClick() {
    setOpen(!open);
  }

  return (
    <>
      {!open && (
        <button>
          <BsLayoutSidebar
            width={24}
            height={24}
            className='text-kalita-brown-dark cursor-pointer h-6 w-6'
            onClick={handleMenuButtonClick}
          />
        </button>
      )}

      <div className="absolute top-0 left-0 w-full z-[9999]">
        {open && (
          <div
            className="w-full h-screen bg-white flex flex-col
        transform transition-all duration-500 ease-out animate-slideRight 
        ">

            <header className="flex flex-col pt-11 pb-6 border-b border-gray-300 px-6">
              <div className="flex justify-end">
                <button>
                  <X
                    width={24}
                    height={24}
                    className='text-kalita-brown-dark cursor-pointer'
                    onClick={handleMenuButtonClick}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <Image
                  src='/kalita-logo.svg'
                  alt='Logo da kalita'
                  width={90}
                  height={90}
                  priority
                />

                <h1 className="text-kalita-brown-dark text-xl font-semibold">Área Administrativa</h1>
              </div>
            </header>

            <nav className="pt-[74px] px-6 flex flex-col gap-8">
              <h2 className="text-kalita-brown-dark font-semibold text-lg">Gerenciamento</h2>

              {sidebarLinks.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-kalita-brown-dark text-base flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>

            <footer className="absolute bottom-0 left-0 pb-[116px] pt-[42px] px-6 border-t border-gray-300 w-full">
              <button className="flex items-center gap-2 text-[15px] cursor-pointer text-base text-kalita-brown-dark font-bold">
                <MdLogout />
                Sair
              </button>
            </footer>
          </div>
        )}
      </div>
    </>
  )
})