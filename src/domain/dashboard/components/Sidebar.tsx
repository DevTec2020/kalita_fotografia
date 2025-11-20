
import Image from "next/image";
import Link from "next/link";

import { RiGalleryView2 } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { PiHouseLight } from "react-icons/pi";
import { PiPackage } from "react-icons/pi";
import { LuMessageSquareText } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

import { CiMenuBurger } from "react-icons/ci";


const sidebarLinks = [
  { href: '/dashboard/painel', label: 'Painel', icon: <RiGalleryView2 /> },
  { href: '/dashboard/gestao-portfolio', label: 'Gestão do Portfólio', icon: <GrGallery /> },
  { href: '/dashboard/fotos', label: 'Fotos da Home', icon: <PiHouseLight /> },
  { href: '/dashboard/gestao-pacotes', label: 'Gestão de Pacotes Sazonais', icon: <PiPackage /> },
  { href: '/dashboard/controle-feedbacks', label: 'Controle de feedbacks', icon: <LuMessageSquareText /> },
];

export function Sidebar({ children }: { children: React.ReactNode }) {

  function Navbar() {
    return (
      <nav className="hidden md:block md:mt-14">
        <h2 className="mb-6 text-kalita-brown-dark font-semibold text-lg">Gerenciamento</h2>

        <div className="flex flex-col gap-2 items-start">
          {sidebarLinks.map(({ href, label, icon }) => (
            <Link key={label} href={href} className="inline-flex items-center gap-3 text-base font-normal">
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <aside
        className='flex flex-col justify-between bg-white md:w-[25%] min-w-[260px] py-10'
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

            <button className="md:hidden">
              <CiMenuBurger size={24} />
            </button>

            <h1 className="text-kalita-brown-dark text-lg font-semibold">Área Administrativa</h1>
          </header>

          <div>
            <Navbar />
          </div>
        </div>

        <div className="hidden md:block border-t border-kalita-bg-light-brown w-full pt-6 px-8">
          <button className="flex items-center gap-2 text-[15px] cursor-pointer text-base text-kalita-brown-dark font-bold">
            <MdLogout />
            Sair
          </button>
        </div>
      </aside>

      <main className="bg-red-300 flex-1">
        {children}
      </main>
    </div>
  )
}