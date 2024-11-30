import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div id="products-cards" className="products-cards">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
}
