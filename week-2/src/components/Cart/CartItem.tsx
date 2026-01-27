interface ICartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  updateCart: (id: number, action: string) => void;
}

export const CartItem = ({
  id,
  name,
  quantity,
  price,
  updateCart,
}: ICartItem) => {
  return (
    <>
      <div>
        <span>
          {name}: {quantity}
        </span>
      </div>
      <div>
        <span>Price per item {price}</span>
      </div>
      <div>
        <button onClick={() => updateCart(id, "increase")}>Add Item</button>
        <button onClick={() => updateCart(id, "decrease")}>Remove Item</button>
      </div>
    </>
  );
};
