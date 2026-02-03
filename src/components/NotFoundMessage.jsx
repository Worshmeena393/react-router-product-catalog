import { Link } from "react-router-dom";

export default function NotFoundMessage({ message }) {
  return (
    <div>
      <h2>{message}</h2>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}
