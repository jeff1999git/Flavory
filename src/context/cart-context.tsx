'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Product } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  isItemInCart: (productId:string) => boolean;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    const isNewItem = !cartItems.some(item => item.id === product.id);

    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    if (isNewItem) {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  const removeFromCart = (productId: string) => {
    const itemToRemove = cartItems.find(item => item.id === productId);

    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));

    if (itemToRemove) {
      toast({
        title: "Removed from cart",
        description: `${itemToRemove.name} has been removed from your cart.`,
        variant: 'destructive'
      });
    }
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, newQuantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  
  const isItemInCart = (productId: string) => {
    return cartItems.some(item => item.id === productId);
  }

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isItemInCart, getCartCount }}>
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
