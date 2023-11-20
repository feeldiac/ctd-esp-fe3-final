import { useReducer } from "react";
import { createContext } from "react";
import { globalContextReducer } from "../reducers";
import { types } from "../contants";

export const initialState = {
  theme: "",
  data: [],
};

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalContextReducer, initialState);

  const darken = () => {
    dispatch({ type: types.DARK_THEME });
  };

  const lighten = () => {
    dispatch({ type: types.LIGHT_THEME });
  };

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        data: state.data,
        darken,
        lighten,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
