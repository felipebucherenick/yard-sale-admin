import { useState } from 'react';
import Image from 'next/image';

import endPoints from 'services/api';
import useFetch from '@hooks/useFetch';
import ProductItem from '@components/ProductItem';
import AddProductModal from '@containers/AddProductModal';
import AddProductForm from '@components/AddProductForm';
import useAlert from '@hooks/useAlert';
import Alert from '@components/Alert';

import checkIcon from '@icons/check-icon.png';

import styles from '@styles/ProductsList.module.scss';

export default function ProductsList() {
  const [openModal, setOpenModal] = useState(false);
  const { alert, setAlert, toggleAlert } = useAlert();
  const products = useFetch(endPoints.products.getProducts(250, 10), alert);

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };
  console.log(products);
  return (
    <>
      <div className={styles['Main-container']}>
        <div className={styles.ProductsList}>
          {alert.active && <Alert alert={alert} handleClose={toggleAlert} />}
          <div className={styles['ProductsList-title']}>
            <h2>List of products</h2>
            <button className={styles['ProductsList-add-product']} onClick={onClickButton}>
              <Image src={checkIcon} alt="check icon" width={30} height={30}></Image>
              <span>Add Product</span>
            </button>
          </div>
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
        {openModal && (
          <AddProductModal>
            <AddProductForm setOpenModal={setOpenModal} setAlert={setAlert} />
          </AddProductModal>
        )}
      </div>
    </>
  );
}
