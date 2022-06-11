import { createContext, useEffect, useReducer, type Dispatch } from "react";

const INITIAL_STATE = {
  card: JSON.parse(localStorage.getItem("card") || "[]"),
  dispatch: (() => undefined) as Dispatch<any>,
};

export const CardContext = createContext(INITIAL_STATE);

const CardReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        card: [...state.card, action.payload],
      };
    case "REMOVE_CARD":
      return {
        ...state,
        card: state.card.filter(
          (element: any) => element.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const CardContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(CardReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(state.card));
  }, [state.card]);

  const addingCard = (card:any):any =>{
    dispatch({type:"ADD_CARD", payload:card})
  }

  return (
    <CardContext.Provider
      value={{
        card:state.card,
        dispatch,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
