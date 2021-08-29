/** React core **/
import React from 'react';

/** Components **/
import { Header } from './components/Header';
import { Card } from './components/UI/Card';
import { Map } from './components/Map';

/** Styles **/
import './styles/styles.scss';
import styles from './App.module.scss';

const App = () => {
  return (
    <main>
      <Header />
      <Card className={styles['app__address-description']}>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>IP ADDRESS</span>
          <span className={styles['app__description-text']}>192.212.174.101</span>
        </div>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>LOCATION</span>
          <span className={styles['app__description-text']}>Brooklyn, NY 10001</span>
        </div>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>TIMEZONE</span>
          <span className={styles['app__description-text']}>UTC - 05:00</span>
        </div>
        <div className={styles['app__description-item']}>
          <span className={styles['app__description-label']}>ISP</span>
          <span className={styles['app__description-text']}>SpaceX Starlink</span>
        </div>
      </Card>
      <Map />
    </main>
  );
};

export default App;
