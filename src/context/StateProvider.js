import React, { createContext, useContext, useReducer } from 'react';

// Creamos un objeto Context que servira al componente que se suscriba
export const StateContext = createContext();

// Construimos nuestro Provider (el que provee los datos)
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Te permite suscrcibirte al Context, y acceder al valor del contexto actual
export const useStateValue = () => useContext(StateContext);