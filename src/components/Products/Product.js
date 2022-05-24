import "./Product.css";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import AuthContext from "../../context/auth-context";

function Product(props) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const addToCartHandler = () => {
    const product = {
      id: Math.random().toString(),
      image: props.image,
      brand: props.brand,
      name: props.name,
      price: props.price,
    };

    cartCtx.onAddToCart(product);
  };

  const removeFromCartHandler = () => {
    // Tuotteen ostoskorista poistamista varten
    const id = props.id;

    cartCtx.onRemoveFromCart(id);
  };

  const checkLoginDiscount = () => {
    // Jos kirjautunut -> hintoja alennetaan 20%
    if (authCtx.isLoggedIn) {
      return (
        <div className="product-discount">
          <p className="price-original">{props.price} €</p>
          <p className="price-discount">
            {(props.price - props.price * 0.2).toFixed(2)} €
          </p>
        </div>
      );
    }

    // Jos ei kirjautunut -> palautetaan normaalit hinnat
    return <div>{props.price}</div>;
  };

  // Luodaanko handler "Lisää ostoskoriin" vai "Poista" napille
  const getCorrectHandler = () => {
    // Tuotteen lisääminen ostoskoriin
    if (props.className === "product") {
      return addToCartHandler();
    }

    // Tuotteen poistaminen ostoskorista
    else if (props.className === "cart-item") {
      return removeFromCartHandler();
    }
  };

  return (
    <div className={props.className + "-container"}>
      <img
        src={require(`../../images/${props.image}.webp`)}
        alt="T-Paita"
        className={props.className + "-image"}
      />
      <div className={props.className + "-info"}>
        <div>{props.brand}</div>
        <div>{props.name}</div>
        {checkLoginDiscount()}
        <button
          className={props.className + "-button"}
          onClick={getCorrectHandler}
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

export default Product;
