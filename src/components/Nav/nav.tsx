import { useState } from "react";
import { Link } from "react-router-dom";
import line from "../../assets/lineDetails.svg";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/portfolio", label: "Portfólio" },
    { href: "/sobre", label: "Sobre" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/contato", label: "Contato" },
  ];

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className="absolute right-6">
      {/* Botão */}
      <button onClick={toggleMenu} className="sm:hidden block z-50 relative">
        {isOpen ? (
          <p className="font-homeKalita text-xl">X</p>
        ) : (
          <img src={line} alt="icone para menu"  className="w-12"/>
        )}
      </button>

      {/* Overlay (fundo escuro) */}
      <div
        onClick={toggleMenu}
        className={`fixed top-28 left-0 w-full h-full bg-black/40 z-40 transition-opacity duration-500 sm:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Menu lateral */}
      <section
        className={`fixed top-28 right-0 h-screen w-1/2 bg-quaternary z-50 
        transform transition-transform duration-700 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="uppercase flex flex-col items-center justify-center gap-8 pt-16">
          {menuItems.map(({ href, label }) => (
            <li
              key={href}
              className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300"
            >
              <Link to={href} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Menu desktop */}
      <ul className="gap-5 uppercase hidden sm:flex">
        {menuItems.map(({ href, label }) => (
          <li
            key={href}
            className="text-md text-primary font-bold hover:cursor-pointer hover:text-secondary transform transition duration-300"
          >
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
