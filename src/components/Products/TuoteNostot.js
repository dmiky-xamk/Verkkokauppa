import "./TuoteNostot..css";
import Product from "./Product";

// Kaupan t-paidat
const products = [
  {
    id: Math.random().toString(),
    image: "t1",
    brand: "Tommy Jeans",
    name: "ORIGINAL TEE",
    price: 24.95,
  },
  {
    id: Math.random().toString(),
    image: "t2",
    brand: "Levi's",
    name: "TAB VINTAGE",
    price: 29.95,
  },
  {
    id: Math.random().toString(),
    image: "t3",
    brand: "Urban Classics",
    name: "HEAVY OVERSIZED",
    price: 14.99,
  },
  {
    id: Math.random().toString(),
    image: "t4",
    brand: "Marc O'Polo",
    name: "C-NECK",
    price: 19.95,
  },
  {
    id: Math.random().toString(),
    image: "t5",
    brand: "Garment Project",
    name: "BEST TEE",
    price: 54.95,
  },
  {
    id: Math.random().toString(),
    image: "t6",
    brand: "Siksilk",
    name: "RAGLAN TECH TAPE",
    price: 39.95,
  },
];

function TuoteNostot() {
  return (
    <div className="shop-products">
      {/* Jokaisesta taulukossa olevasta paidasta luodaan oma Product komponentti */}
      {products.map((product) => (
        <Product
          className="product"
          btnText="Lisää ostoskoriin"
          key={product.id}
          image={product.image}
          brand={product.brand}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default TuoteNostot;
