import { useState } from "react";
import { Link } from "react-router-dom";
import line from "../../assets/lineDetails.svg";


export function Nav(){
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {href: "/portfolio", label: "Portfólio"},
    {href: "/sobre", label: "Sobre"},
    {href: "/depoimentos", label: "Depoimentos"},
    {href: "/contato", label: "Contato"},
  ]

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
    return (
      <nav className="absolute right-6 ">
          <button onClick={toggleMenu} className="sm:hidden block">
            {isOpen ? (
              <p className="font-homeKalita text-2xl">X</p>
            ) : (
              <img src={line} alt="icone para menu" />
            )}
          </button>
            {isOpen && (
                <div
                    className="fixed top-28 inset-0 bg-black/40 z-40 sm:hidden"
                    onClick={toggleMenu}
                >
                  <section className= "absolute right-0 bg-quaternary h-svh w-1/2 animate-openMenu">
                   <ul className="uppercase flex flex-col items-center justify-center gap-8 pt-8">
                    {menuItems.map(({href, label}) => (
                       <li key={href} className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">
                        <Link to={href} >
                          {label}
                        </Link>
                       </li>
                    ))}
                   </ul>
                  </section>
                </div>
            )}

            <ul className="gap-5 uppercase hidden sm:flex">
             {menuItems.map(({href, label}) => (
                <li key={href} className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">
                  <Link to={href}>
                    {label}
                  </Link>
                </li>
            ))}
           </ul>
        </nav>
    )
}