import Image from 'next/image';

import logo from '@icons/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';

import styles from '../styles/Header.module.scss';

const Header = () => {
  const avatarImage = 'https://ui-avatars.com/api/?name=admin&background=acd9b2&color=232830&rounded=true';
  return (
    <>
      <div className={styles.Header}>
        <div className={styles['Header-mobile-menu']}>
          <Image src={menu} alt="Menu" />
        </div>
        <div className={styles['Header-title']}>
          <Image src={logo} alt="Logo" />
          <h2>Dashboard</h2>
        </div>
        <nav className={styles['Header-nav']}>
          <p>Products</p>
          <p>Customers</p>
          <p>Metrics</p>
        </nav>
        <div className={styles['Header-admin-menu']}>
          <img src={avatarImage} alt="Admin Menu" width={40} height={40} />
        </div>
      </div>
    </>
  );
};

export default Header;
