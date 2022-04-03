import { deleteProduct } from '../services/api/products';
import styles from '../styles/DeleteProductAlert.module.scss';

const DeleteProductAlert = ({ setOpenDeleteModal, productId, setAlert }) => {
  const onCancel = () => {
    setOpenDeleteModal((prevState) => !prevState);
  };

  const handleDelete = () => {
    deleteProduct(productId).then(() => {
      setAlert({
        active: true,
        message: 'Product deleted successfully',
        type: 'succes',
        autoClose: true,
      });
    });
    onCancel();
  };
  return (
    <>
      <div className={styles.DeleteProductAlert}>
        <p>Are you sure you want to delete this product ?</p>
        <div className={styles.Buttons}>
          <button className={styles.Agreed} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.Cancel} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteProductAlert;
