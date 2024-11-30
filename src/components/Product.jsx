import React from "react";

export default function Product(props) {
  const { product } = props;
  console.log(product);
  return (
    <>
      <div className="products-card">
        <img className="product-img" src={product.image} alt="product-img" />
        <a href="#" className="product-title">
          {product.title}
        </a>
        <p className="product-category">{product.category}</p>
        <p className="product-price">{product.price}</p>
        <div className="product-footer">
          <button data-id={product.id} className="btn product-into-cart">
            В корзину
          </button>
          <button data-id={product.id} className="btn product-delete">
            Удалить
          </button>
        </div>
      </div>
    </>
  );
}
