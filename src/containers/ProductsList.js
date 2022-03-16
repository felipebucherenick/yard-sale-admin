import endPoints from '../services/api';
import useFetch from '../hooks/useFetch';

export default function ProductsList() {
  const products = useFetch(endPoints.products.getProducts(5, 5));
  console.log(products);
  return <h2>Product List</h2>;
}
