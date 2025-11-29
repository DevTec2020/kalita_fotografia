import Link from "next/link";
import { sidebarLinks } from "./sidebar.contents";

  export const Navbar = ()=> {
    return (
      <nav className="hidden md:block md:mt-14">
        <h2 className="mb-6 text-kalita-brown-dark font-semibold text-lg">Gerenciamento</h2>

        <div className="flex flex-col gap-4 items-start">
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