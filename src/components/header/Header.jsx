import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="h-[100px] w-full bg-amber-700">
      <nav className="flex h-full items-center justify-center gap-8">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/assinatura">Assinatura</NavLink>

        <NavLink to="/sobre">Sobre</NavLink>

        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
}

export default Header;