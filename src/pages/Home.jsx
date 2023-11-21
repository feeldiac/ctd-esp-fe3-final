import React, { useContext } from "react";
import Card from "../components/Card";
import { GlobalContext } from "../contexts/GlobalContext";

const Home = () => {
  const { data } = useContext(GlobalContext);

  return (
    <main className="main">
      <h1 className="title">These are our dentists!</h1>
      <div className="card-grid">
        {data?.length > 0 &&
          data?.map(({ id, name, username, address: { city } }) => (
            <Card
              key={id}
              id={id}
              name={name}
              city={city}
              username={username}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
