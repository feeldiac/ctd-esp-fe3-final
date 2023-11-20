import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme } = useContext(GlobalContext);
  
  console.log(theme);

  return (
    <main className="">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus
        exercitationem odit voluptatum error possimus sunt, ipsum a incidunt
        dolorum eum, aspernatur nemo sequi, quisquam hic vel perferendis
        distinctio repudiandae aliquam est laborum nulla. Temporibus modi minus
        asperiores fugit animi alias atque nobis distinctio? Itaque
        reprehenderit magnam temporibus at dolores.
      </p>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
