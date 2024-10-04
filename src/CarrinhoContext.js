import React, { createContext, useContext, useReducer } from 'react';

// Inicializa o estado do carrinho
const initialState = {
  items: []
};

// Define o tipo de ação
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

// Cria um reducer para o carrinho
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

// Cria o contexto do carrinho
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto do carrinho
export const useCart = () => {
  return useContext(CartContext);
};
