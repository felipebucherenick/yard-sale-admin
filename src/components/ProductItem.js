import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
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
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
