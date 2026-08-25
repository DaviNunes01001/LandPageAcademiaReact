import { NavLink } from "react-router-dom";

import { FaHome, FaDumbbell, FaPhone } from "react-icons/fa";

function Header() {
  return (
    <header className="flex min-h-[100px] w-full flex-col items-center justify-center gap-4 bg-amber-700 px-4 md:flex-row md:justify-around">

      <h1 className="text-[30px] font-semibold md:text-[35px]">
        GicosFit
      </h1>

      <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-8">

        <NavLink
          to="/"
          className="font-light hover:border-b-2 hover:border-white"
        >
          <div className="flex w-[100px] items-center justify-center gap-[10px] pb-1 text-center">
            <FaHome />
            Home
          </div>
        </NavLink>

        <NavLink
          to="/assinatura"
          className="font-light hover:border-b-2 hover:border-white"
        >
          <div className="flex w-[100px] items-center justify-center gap-[10px] pb-1 text-center">
            <FaDumbbell />
            Assinatura
          </div>
        </NavLink>

        <NavLink
          to="/sobre"
          className="font-light hover:border-b-2 hover:border-white"
        >
          <div className="flex w-[100px] items-center justify-center gap-[10px] pb-1 text-center">
            <FaDumbbell />
            Sobre
          </div>
        </NavLink>

        <NavLink
          to="/contato"
          className="font-light hover:border-b-2 hover:border-white"
        >
          <div className="flex w-[100px] items-center justify-center gap-[10px] pb-1 text-center">
            <FaPhone />
            Contato
          </div>
        </NavLink>

      </nav>
    </header>
  );
}

export default Header;