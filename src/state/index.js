import React, { createContext, useContext, useReducer } from 'react';
import reducers from './reducers';

const StateContext = createContext();

const initialState = {
  subscriptions: [],
  user: {}
}

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducers, initialState)}>
      {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);
