/** React core **/
import React from 'react';

/** Components **/
import { Input } from '../UI/Input';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header} style={{ backgroundImage: 'url(/images/pattern-bg.png)' }}>
      <h1 className={styles.header__title}>IP Address Tracker</h1>
      <Input />
    </header>
  );
};
