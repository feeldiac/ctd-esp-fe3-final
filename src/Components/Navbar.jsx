import React from 'react'
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, darken, lighten } = useContext(GlobalContext);
  const toggleTheme = () => theme === 'light' ? darken() : lighten();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar