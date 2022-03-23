import styles from '../styles/AddProductModal.module.scss';

const AddProductModal = ({ children }) => {
  return <div className={styles.ModalBackground}>{children}</div>;
};

export default AddProductModal;
