import styles from '@styles/ProductModal.module.scss';

const DeleteProductModal = ({ children }) => {
  return <div className={styles.ModalBackground}>{children}</div>;
};

export default DeleteProductModal;
