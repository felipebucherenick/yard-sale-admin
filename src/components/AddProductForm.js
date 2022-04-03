import { useRef } from 'react';
import Image from 'next/image';

import { addProduct } from 'services/api/products';

import cancel from '@icons/cancel.png';
import addPhoto from '@icons/add-image.png';

import styles from '@styles/AddProductForm.module.scss';

const AddProductForm = ({ setOpenModal, setAlert }) => {
  const formRef = useRef(null);

  const handleCancel = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      title: formData.get('title'),
      price: parseInt(formData.get('price')),
      description: formData.get('description'),
      categoryId: parseInt(formData.get('category')),
      images: [`/${formData.get('images').name}`],
    };
    console.log(data);
    addProduct(data)
      .then(() => {
        setAlert({
          active: true,
          message: 'Product added successfully',
          type: 'succes',
          autoClose: true,
        });
        setOpenModal(false);
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: 'error',
          autoClose: false,
        });
        setOpenModal(false);
      });
  };
  return (
    <>
      <div className={styles.AddProductFormContainer}>
        <div className={styles['AddProductForm-header']}>
          <div className={styles.Close} onClick={handleCancel} onKeyDown={handleCancel} role="button" tabIndex={0}>
            <Image src={cancel} alt="Cancel" width={30} height={30}></Image>
          </div>
        </div>

        <form className={styles['AddProductForm-form']} ref={formRef} onSubmit={handleSubmit}>
          <div className={styles['AddProductForm-title-price']}>
            <div className={styles['AddProductForm-title']}>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text"></input>
            </div>

            <div className={styles['AddProductForm-price']}>
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number"></input>
            </div>
          </div>

          <div className={styles['AddProductForm-category']}>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" autoComplete="category-name">
              <option value="1">Clothes</option>
              <option value="2">Electronics</option>
              <option value="3">Furniture</option>
              <option value="4">Toys</option>
              <option value="5">Others</option>
            </select>
          </div>

          <div className={styles['AddProductForm-description']}>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
          </div>

          <div className={styles['AddProductForm-photo']}>
            <label htmlFor="add-photo">Add photo</label>
            <div className={styles['AddProductForm-frame']}>
              <Image src={addPhoto} alt="Add photo icon" className={styles['AddProductForm-image']} />
              <div className={styles['AddProductForm-input']}>
                <input id="images" name="images" type="file"></input>
                <span>Upload a file</span>
              </div>
            </div>
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
