import Image from 'next/image';

import close from '@icons/close.png';

import styles from '@styles/Alert.module.scss';

const Alert = ({ alert, handleClose }) => {
  if (alert.active && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }
  return (
    <>
      <div className={`${styles.Alert} ${alert.type === 'error' && styles['Alert-error']}`}>
        <p>{alert.message}</p>
        <button className={styles.Close} onClick={handleClose}>
          <Image src={close} alt="Cancel" width={20} height={20}></Image>
        </button>
      </div>
    </>
  );
};

export default Alert;
