import "./Pikaostoskori.css";
import { useContext } from "react";
import Product from "../Product";
import AuthContext from "../../../context/auth-context";
import CartContext from "../../../context/cart-context";

const DISCOUNT_PERCENT = 0.2;

function Pikaostoskori() {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  // Palauttaa joko alennetun hinnan tai normaalin hinnan
  const getProductRealPrice = (product) => {
    if (authCtx.isLoggedIn)
      return (product.price - product.price * DISCOUNT_PERCENT).toFixed(2);

    return product.price;
  };

  // Tuotteiden yhteishinta
  const productsTotal = cartCtx.cart
    .reduce((acc, product) => {
      return acc + Number(getProductRealPrice(product));
    }, 0)
    .toFixed(2);

  // Palauttaa tekstin sen mukaan, onko ostoskorissa tuotteita vai ei
  const getCartInfoText = () => {
    if (!cartCtx.cart.length) {
      return <p>Ostoskorissa ei ole tuotteita.</p>;
    }

    return (
      <p>
        Ostoskorissa on {cartCtx.cart.length} tuotetta, loppusumma{" "}
        {productsTotal} e
      </p>
    );
  };

  const orderProductsHandler = () => {
    alert("Jatketaan tilaukseen...");
  };

  return (
    <div className="cart-items">
      <h3>Ostoskori</h3>
      {getCartInfoText()}
      {/* Jokaisesta ostoskorin tuotteesta luodaan Product komponentti */}
      {cartCtx.cart.map((product) => (
        <Product
          className="cart-item"
          btnText="Poista"
          id={product.id}
          key={product.id}
          image={product.image}
          brand={product.brand}
          name={product.name}
          price={product.price}
        />
      ))}
      {cartCtx.cart.length > 0 && (
        <button onClick={orderProductsHandler}>Tilaa tuotteet</button>
      )}
    </div>
  );
}

export default Pikaostoskori;
