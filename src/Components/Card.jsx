import React from "react";
import { useNavigate } from "react-router-dom";

const DEFAULT_IMAGE = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
const Card = ({ name, username, city, id }) => {
  const navigate = useNavigate();

  const handleFavorite = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <img
        src={DEFAULT_IMAGE}
        alt={`Dentist ${name}`}
        width="150"
        height="150"
      />
      <h2
        className="name"
        role="button"
        onClick={() => navigate(`/dentist/${id}`)}
      >
        {name}
      </h2>
      <p className="username">Follow him/her @{username?.toLowerCase()}</p>
      <p className="city">📍 {city}</p>

      {/* LocalStorage stuff */}
      <button onClick={handleFavorite} className="favButton">
        Add to favorites 🤍
      </button>
    </div>
  );
};

export default Card;
