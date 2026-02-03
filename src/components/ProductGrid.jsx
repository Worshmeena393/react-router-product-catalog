import React from "react";
import ProductCard from "./productCard"; // ✅ Correct import

export default function ProductGrid({ products }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
