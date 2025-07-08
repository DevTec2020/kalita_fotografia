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

          <button onClick={toggleMenu} className="sm:hidden flex">
            <img src={line} alt="icone para menu" />
          </button>
          {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed top-30 inset-0 bg-black/40 z-40"
                    onClick={toggleMenu}
                >
                   <ul className="gap-3 uppercase flex flex-col items-end ">
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
                </div>
            )}
        </nav>
    )
}