import React from 'react';

import useAuth from '../hooks/useAuth';

import styles from '../styles/AdminMenu.module.scss';

const AdminMenu = () => {
  const auth = useAuth();
  return (
    <>
      <div className={styles.AdminMenu}>
        <button onClick={() => auth.logout()}>Logout</button>
      </div>
    </>
  );
};

export default AdminMenu;
