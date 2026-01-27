import React from "react";

interface ICartItem {
  item: {
    itemName: string;
    itemQuantity: number;
  };
  handleUpdateCart: (name: string, buttonType: string) => void;
}

export const CartItem = ({ item, handleUpdateCart }: ICartItem) => {
  return (
    <div>
      {item.itemName} Quantity: {item.itemQuantity}
      <div className="flex gap-2 mt-2">
        <button onClick={() => handleUpdateCart(item.itemName, "increase")}>
          Increase Quantity
        </button>
        <button onClick={() => handleUpdateCart(item.itemName, "decrease")}>
          Decrease Quantity
        </button>
      </div>
    </div>
  );
};
