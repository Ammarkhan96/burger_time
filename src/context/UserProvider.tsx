import React, { useState, ReactNode } from 'react';
import { IProductCart } from '../interface/types';
import { UserContext } from './UserContext';

interface IUserProvider {
  children: ReactNode;
}

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [cart, setCart] = useState<IProductCart[]>([]);

  const cleanCart = (): void => {
    setCart([]);
  };

  const addCart = (product: IProductCart): void => {
    const added = cart.find((value) => value.id === product.id);

    if (!added) {
      setCart([...cart, product]);
    } else {
      addQuantity(product.id);
    }
  };

  const deleteProduct = (id: number): void => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
  };

  const addQuantity = (id: number): void => {
    setCart(cart.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const removeQuantity = (id: number): void => {
    setCart(cart.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <UserContext.Provider 
      value={{ cart, addCart, deleteProduct, removeQuantity, addQuantity, cleanCart }} 
    >
      {children}
    </UserContext.Provider>
  );
};
