import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../containers/Modal';
import DeleteProductAlert from '@components/DeleteProductAlert';
import EditProductForm from './EditProductForm';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product, setAlert }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleDelete = () => {
    setOpenDeleteModal((prevState) => !prevState);
  };
  const handleEdit = () => {
    setOpenEditModal((prevState) => !prevState);
  };
  return (
    <div className={styles.ProductItem}>
      <div className={styles['ProductItem-info']}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={40}
          height={40}
          className={styles['ProductItem-image']}
        />
        <p>{product.title}</p>
      </div>
      <div className={styles['ProductItem-category']}>
        <p>{product.category.name}</p>
      </div>
      <div className={styles['ProductItem-price']}>
        <p>$ {product.price}</p>
      </div>
      <div className={styles['ProductItem-id']}>
        <p>{product.id}</p>
      </div>
      <div className={styles['ProductItem-edit']}>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
      {openDeleteModal && (
        <Modal>
          <DeleteProductAlert setOpenDeleteModal={setOpenDeleteModal} productId={product.id} setAlert={setAlert} />
        </Modal>
      )}
      {openEditModal && (
        <Modal>
          <EditProductForm product={product} setOpenEditModal={setOpenEditModal} setAlert={setAlert} />
        </Modal>
      )}
    </div>
  );
};

export default ProductItem;
