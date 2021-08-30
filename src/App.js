/** React core **/
import React from 'react';
import { useSelector } from 'react-redux';

/** Components **/
import { Header } from './components/Header';
import { Card } from './components/UI/Card';
import { Map } from './components/Map';

/** Styles **/
import './styles/styles.scss';
import styles from './App.module.scss';

const App = () => {
  const data = useSelector(({ address }) => address.data);
  let content

  if (data) {
    const { ip, isp, city, country, postalCode, timezone } = data;

    content = (
      <Card className={styles['app__address-description']}>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>IP ADDRESS</span>
          <span className={styles['app__description-text']}>{ ip }</span>
        </div>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>LOCATION</span>
          <span className={styles['app__description-text']}>{ city }, { country } { postalCode }</span>
        </div>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>TIMEZONE</span>
          <span className={styles['app__description-text']}>UTC { timezone }</span>
        </div>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>ISP</span>
          <span className={styles['app__description-text']}>{ isp }</span>
        </div>
      </Card>
    );
  }

  return (
    <main>
      <Header />
      { data.ip && content }
      <Map />
    </main>
  );
};

export default App;
