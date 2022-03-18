import endPoints from '../services/api';
import useFetch from '../hooks/useFetch';
import ProductItem from '../components/ProductItem';
import styles from '../styles/ProductsList.module.scss';

export default function ProductsList() {
  const products = useFetch(endPoints.products.getProducts(30, 0));
  console.log(products);
  return (
    <>
      <div className={styles['Main-container']}>
        <div className={styles.ProductsList}>
          <div className={styles['ProductsList-header']}>
            <p>NAME</p>
            <p>CATEGORY</p>
            <p>PRICE</p>
            <p>ID</p>
            <p> </p>
          </div>
          <div className={styles['ProductsList-container']}>
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
