import React, { useState } from "react";
import { CartItem } from "./CartItem";

/**
 * Make a cart system where the parent stores quantity, but the child updates it.
 * Components
 *      - Cart (parent)
 *      - CartItem (child)
 *      - CartItem (child)
 * Requirements
 *      - Cart stores state: quantity
 *      - CartItem receives:
 *      - quantity
 *      - onIncrease()
 *      - onDecrease()
 *      - Buttons in child update parent state
 */

// item name: quantity
// { apple: 0 }
// { orange: 0 }

export type ItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

export type CartType = ItemType[];

export const Cart = ({ children }) => {
  const [cart, setCart] = useState<CartType>([
    { id: 1, name: "Orange", quantity: 0, price: 12 },
    { id: 2, name: "Apple", quantity: 0, price: 6 },
    { id: 3, name: "Banana", quantity: 0, price: 8 },
  ]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // item
  function updateCart(id: number, action: string) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            action === "increase" ? item.quantity + 1 : action === "decrease" ? item.quantity - 1 : 0,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  return (
    <div>
      <h1>Cart</h1>
      <div>Total cost: ${total}</div>
      {children}
      <div>
        {cart.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            updateCart={updateCart}
          />
        ))}
      </div>
    </div>
  );
};
