import { useReducer } from "react";
import { createContext } from "react";
import { globalContextReducer } from "../reducers";
import { types } from "../contants";
import { useGetDentists } from "../hooks";
import { useMemo } from "react";

export const initialState = {
  theme: "light",
  data: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const { data } = useGetDentists();
  const memoizedData = useMemo(() => data, [data]);

  const [state, dispatch] = useReducer(globalContextReducer, initialState);

  const darken = () => {
    dispatch({ type: types.darkTheme });
  };

  const lighten = () => {
    dispatch({ type: types.lightTheme });
  };

  const addFavorite = (dentist) => {
    localStorage.setItem(
      "favorites",
      JSON.stringify([...state.favorites, dentist])
    );
    dispatch({ type: types.addFavorite, payload: dentist });
  };

  const removeFavorite = (dentist) => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(state.favorites.filter((item) => item.id !== dentist.id))
    );
    dispatch({ type: types.removeFavorite, payload: dentist });
  };

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        data: memoizedData,
        favorites: state.favorites,
        darken,
        lighten,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
