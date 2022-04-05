import styles from '@styles/Modal.module.scss';

const Modal = ({ children }) => {
  return <div className={styles.ModalBackground}>{children}</div>;
};

export default Modal;
