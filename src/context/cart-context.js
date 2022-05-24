import React, { useState } from "react";

const CartContext = React.createContext({
  cart: [],
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
});

export function CartContextProvider(props) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCartHandler = (product) => {
    setShoppingCart((prevProducts) =>
      setShoppingCart([...prevProducts, product])
    );
  };

  const removeFromCartHandler = (id) => {
    setShoppingCart((prevProducts) =>
      setShoppingCart(prevProducts.filter((product) => product.id !== id))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart: shoppingCart,
        onAddToCart: addToCartHandler,
        onRemoveFromCart: removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
