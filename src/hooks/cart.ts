'use client';

import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import Cookies from 'js-cookie';
import { revalidateCart } from '@lib/cart';
import { ICartItem } from '@types';

const cookieName = 'C-DOC_Cart';

/**
 * Custom hook to manage cart and synchronize it with cookies.
 */
export const useCart = () => {
  const [cart, setCart] = useState<ICartItem[]>(undefined);

  // Load cart from cookies on initial render.
  useEffect(() => {
    const cartInCookies = Cookies.get(cookieName);
    if (cartInCookies) {
      try {

        setCart(JSON.parse(cartInCookies));
      } catch (e) {
        Cookies.remove(cookieName);
        setCart([]);
      }
    }
  }, []);

  /**
   * Increases the quantity of an item in the cart.
   */
  const increaseItemQuantity = (itemId: string, digital: boolean) => {
    setCart((prevCart) => {
      // Create a new cart if it doesn't exist.
      if (prevCart === undefined) {
        enqueueSnackbar('Item added to cart');
        return [{ id: itemId, quantity: 1 }];
      }

      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);

      // If the item doesn't exist in the cart, add it.
      if (!existingItem) {
        enqueueSnackbar('Item added to cart');
        return [...prevCart, { id: itemId, quantity: 1 }];
      }

      if (digital) return;

      return prevCart.map((cartItem) => {
        if (cartItem.id === itemId) {
          enqueueSnackbar('Cart Updated');
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    });
  };

  /**
 * Decreases the quantity of an item in the cart.x
 * @param itemId - The id of the item to remove.
 */
  const decreaseItemQuantity = (itemId: string) => {
    if (cart === undefined) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);

      if (!existingItem) return;

      if (existingItem.quantity === 1) return;

      return prevCart.map((cartItem) => {
        if (cartItem.id === itemId) {
          enqueueSnackbar('Cart Updated');
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    });
  };

  /**
   * Removes an item from the cart.
   * @param itemId - The id of the item to remove.
   */
  const removeItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    enqueueSnackbar('Item removed from cart');
  };

  /**
   * Clears the cart.
   */
  const clearCart = () => {
    setCart([]);
  };

  // Synchronize cart with cookies whenever it changes.
  useEffect(() => {
    if (cart === undefined) return;
    Cookies.set(cookieName, JSON.stringify(cart), {
      path: '/',
      sameSite: 'strict',
      secure: true
    });
    revalidateCart();
  }, [cart]);

  return { cart, removeItem, clearCart, decreaseItemQuantity, increaseItemQuantity };
};
