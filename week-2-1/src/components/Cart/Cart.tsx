import React, { useState } from "react";
import { CartItem } from "./CartItem";

/**
 * Make a cart system where the parent stores quantity, but the child updates it.
 * Components
 *      - Cart (parent)
 *      - CartItem (child)
 * Requirements
 *      - Cart stores state: quantity
 *      - CartItem receives:
 *      - quantity
 *      - onIncrease()
 *      - onDecrease()
 *      - Buttons in child update parent state
 */

/**
 * orange, apple, kiwi
 */

const items = [
  { itemName: "orange", itemQuantity: 0 },
  { itemName: "apple", itemQuantity: 0 },
  { itemName: "kiwi", itemQuantity: 0 },
];

export const Cart = () => {
  const [cart, setCart] = useState(items);

  // "increase"
  function handleUpdateCart(itemName: string, buttonType: string) {
    const updatedCart = cart.map((curr_item) => {
      if (curr_item.itemName === itemName) {
        if (buttonType === "increase") {
          curr_item.itemQuantity += 1;
        }

        if (buttonType === "decrease" && curr_item.itemQuantity > 0) {
          curr_item.itemQuantity -= 1;
        }

        return curr_item;
      }

      return curr_item;
    });

    setCart(updatedCart);
  }

  return (
    <div className="flex justify-center items-center gap-4">
      {cart.map((item) => {
        return <CartItem item={item} handleUpdateCart={handleUpdateCart} />;
      })}
    </div>
  );
};
