import { useParams } from "react-router-dom";
import products from "../data/products";
import BackButton from "../components/BackButton";
import NotFoundMessage from "../components/NotFoundMessage";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFoundMessage message="Product not found" />;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>

      <BackButton />
    </div>
  );
}
