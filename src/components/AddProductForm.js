import Image from 'next/image';
import cancel from '@icons/cancel.png';
import styles from '../styles/AddProductForm.module.scss';

const AddProductForm = () => {
  return (
    <>
      <div className={styles.AddProductFormContainer}>
        <div className={styles['AddProductForm-header']}>
          <div className={styles.Close}>
            <Image src={cancel} alt="Cancel" width={30} height={30}></Image>
          </div>
        </div>

        <form className={styles['AddProductForm-form']}>
          <div className={styles['AddProductForm-title-price']}>
            <div className={styles['AddProductForm-title']}>
              <label htmlFor="title">Title</label>
              <input id="title" type="text"></input>
            </div>

            <div className={styles['AddProductForm-price']}>
              <label htmlFor="price">Price</label>
              <input id="price" type="number"></input>
            </div>
          </div>

          <div className={styles['AddProductForm-category']}>
            <label htmlFor="category">Category</label>
            <input id="category" type="text"></input>
          </div>

          <div className={styles['AddProductForm-description']}>
            <label htmlFor="description">Description</label>
            <textarea id="description"></textarea>
          </div>

          <div className={styles['AddProductForm-photo']}>
            <p>Cover photo</p>
          </div>

          <button type="submit" className={styles['AddProductForm-submit']}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
