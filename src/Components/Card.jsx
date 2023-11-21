import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

const DEFAULT_IMAGE = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
const Card = ({ name, username, city, id }) => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

  const isFavorite = (dentist) => {
    return favorites.some((item) => item.id === dentist.id);
  };

  const toggleFavorite = (dentist) => {
    isFavorite(dentist) ? removeFavorite(dentist) : addFavorite(dentist);
  };

  const handleFavorite = () => {
    const dentist = { name, username, city, id };
    alert(
      `Dentist ${dentist.name} has been ${
        isFavorite(dentist) ? "removed" : "added"
      } to favorites!`
    )
    toggleFavorite(dentist);
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
