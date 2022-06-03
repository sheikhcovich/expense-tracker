/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { useLocalStorage } from "./hook/useLocalStorage";

const initialState = {
  transactions: [],
};

//create context
export const GlobalContext = createContext(initialState);

//create Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [error, setError] = useState();
  const [store, setStore] = useLocalStorage(state);
  useEffect(() => {
    dispatch({
      type: "ADD",
      payload: store,
    });
  }, []);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  };

  useEffect(() => {
    const isError = setStore();
    if (isError) {
      setError(isError);
    }
  }, [state.transactions]);

  useEffect(() => {
    if (error) {
      alert(error);
      console.log(store);
      dispatch({
        type: "ADD",
        payload: store,
      });
      setError(null);
    }
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
