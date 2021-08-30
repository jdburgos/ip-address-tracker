/** React core **/
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

/** Styles **/
import styles from './Input.module.scss';

/** Actions **/
import { fetchAddressData } from '../../../store/address/address.actions';

export const Input = () => {
  const ipRef = useRef();
  const dispatch = useDispatch();

  const trackIpHandler = e => {
    const ipRegex = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/g;
    const isClick = e.type === 'click';
    const isEnterKey = e.key === 'Enter' && e.type === 'keyup';
    const ip = ipRef.current.value.trim();
    const isIp = ipRegex.test(ip);
    const isValid = isIp && (isClick || isEnterKey);

    if (isValid) {
      dispatch(fetchAddressData(ip));
    }
  };

  return (
    <div>
      <input
        ref={ipRef}
        className={styles.input}
        type="text"
        placeholder="Search for any IP address or domain"
        onKeyUp={trackIpHandler.bind(this)}
      />
      <button className={styles.input__btn} type="button" onClick={trackIpHandler}>
        &gt;
      </button>
    </div>
  );
};
