/** Components **/
import { Input } from '../UI/Input';

/** Styles **/
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>IP Address Tracker</h1>
        <Input />
      </div>
      <img
        className={styles.header__image}
        src={`${process.env.PUBLIC_URL}/images/pattern-bg.png`}
        alt="Background"
      />
    </header>
  );
};
