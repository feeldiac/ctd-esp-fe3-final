import { useReducer } from "react";
import { createContext } from "react";
import { globalContextReducer } from "../reducers";
import { types } from "../contants";

export const initialState = {
  theme: 'light',
  data: [],
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalContextReducer, initialState);

  const darken = () => {
    dispatch({ type: types.darkTheme });
  };

  const lighten = () => {
    dispatch({ type: types.lightTheme });
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
