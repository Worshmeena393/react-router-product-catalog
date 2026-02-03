import products from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function ProductsList() {
  return <ProductGrid products={products} />;
}
