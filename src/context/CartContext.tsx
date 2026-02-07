import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Cart, CartItem, Moto } from '../types';

interface CartContextType {
  cart: Cart;
  addToCart: (moto: Moto) => void;
  removeFromCart: (motoId: string) => void;
  updateQuantity: (motoId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction = 
  | { type: 'LOAD_CART'; payload: Cart }
  | { type: 'ADD_TO_CART'; payload: Moto }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { motoId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'LOAD_CART':
      return action.payload;
      
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.moto.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.moto.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
        return calculateTotals({ ...state, items: updatedItems });
      } else {
        const updatedItems = [...state.items, { moto: action.payload, cantidad: 1 }];
        return calculateTotals({ ...state, items: updatedItems });
      }
    }
      
    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(item => item.moto.id !== action.payload);
      return calculateTotals({ ...state, items: updatedItems });
    }
      
    case 'UPDATE_QUANTITY': {
      const { motoId, quantity } = action.payload;
      
      if (quantity <= 0) {
        const updatedItems = state.items.filter(item => item.moto.id !== motoId);
        return calculateTotals({ ...state, items: updatedItems });
      }
      
      const updatedItems = state.items.map(item =>
        item.moto.id === motoId
          ? { ...item, cantidad: quantity }
          : item
      );
      return calculateTotals({ ...state, items: updatedItems });
    }
      
    case 'CLEAR_CART':
      return calculateTotals({ ...state, items: [] });
      
    default:
      return state;
  }
};

const calculateTotals = (cart: Cart): Cart => {
  const total = cart.items.reduce((sum, item) => sum + (item.moto.precio * item.cantidad), 0);
  const itemCount = cart.items.reduce((sum, item) => sum + item.cantidad, 0);
  
  return {
    ...cart,
    total,
    itemCount
  };
};

const loadCartFromStorage = (): Cart => {
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      return calculateTotals(parsedCart);
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  
  return { items: [], total: 0, itemCount: 0 };
};

const saveCartToStorage = (cart: Cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, loadCartFromStorage());

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const addToCart = (moto: Moto) => {
    dispatch({ type: 'ADD_TO_CART', payload: moto });
  };

  const removeFromCart = (motoId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: motoId });
  };

  const updateQuantity = (motoId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { motoId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};