import React from "react";
import Card from "../components/Card";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";
const Favs = () => {
  const { favorites } = useContext(GlobalContext);
  return (
    <main className="main">
      <h1 className="title">
        These are our <em>favorites</em> dentists!
      </h1>
      <div className="card-grid">
        {favorites?.length > 0 ? (
          favorites?.map(({ id, name, username, address }) => (
            <Card
              key={id}
              id={id}
              name={name}
              city={address?.city}
              username={username}
            />
          ))
        ) : (
          <p className="subtitle">🙌 No favorites yet.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
