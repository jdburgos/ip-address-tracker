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
        <div>
          <span>IP ADDRESS</span>
          <span>192.212.174.101</span>
        </div>
        <div>
          <span>LOCATION</span>
          <span>Brooklyn, NY 10001</span>
        </div>
        <div>
          <span>TIMEZONE</span>
          <span>UTC - 05:00</span>
        </div>
        <div>
          <span>ISP</span>
          <span>SpaceX Starlink</span>
        </div>
      </Card>
      <Map />
    </main>
  );
};

export default App;
