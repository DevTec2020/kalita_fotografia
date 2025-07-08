import { useState } from "react";
import { Link } from "react-router-dom";
import line from "../../assets/lineDetails.svg";

export function Nav(){
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

    return (
      <nav className="absolute right-6 ">
          <ul className="gap-5 uppercase hidden sm:flex">
            <Link to="/portfolio">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Portfólio</li>
            </Link>
            <Link to="/sobre">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Sobre</li>
            </Link>
            <Link to="/depoimentos">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Depoimentos</li>
            </Link>
            <Link to="/contato">
              <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Contato</li>
            </Link>
          </ul>

          <button onClick={toggleMenu} className="sm:hidden block">
            {isOpen ? <p className="font-homeKalita text-2xl">X</p> : <img src={line} alt="icone para menu" />}
          </button>
          {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed top-28 inset-0 bg-black/40 z-40"
                    onClick={toggleMenu}
                >
                  <nav className="absolute right-0 bg-quaternary h-svh w-1/2">
                   <ul className="uppercase flex flex-col items-center justify-center gap-8 pt-8">
                      <Link to="/portfolio">
                        <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Portfólio</li>
                      </Link>
                      <Link to="/sobre">
                        <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Sobre</li>
                      </Link>
                      <Link to="/depoimentos">
                        <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Depoimentos</li>
                      </Link>
                      <Link to="/contato">
                        <li className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300">Contato</li>
                      </Link>
                  </ul>
                  </nav>
                </div>
            )}
        </nav>
    )
}