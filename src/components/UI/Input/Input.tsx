/** React core **/
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

/** Styles **/
import styles from './Input.module.scss';

/** Actions **/
import { fetchAddressData } from '../../../store/address/address.actions';

type ChangeEvent = React.KeyboardEvent | React.MouseEvent;

const isKeyboardEvent = (e: ChangeEvent): e is React.KeyboardEvent => {
  return (e as React.KeyboardEvent).getModifierState !== undefined;
};

export const Input = () => {
  const ipRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const trackIpHandler = (e: ChangeEvent) => {
    const ipRegex = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/g;
    const isClick = e.type === 'click';
    let isEnterKey;

    if (isKeyboardEvent(e)) {
      isEnterKey = e.key === 'Enter' && e.type === 'keyup';
    }

    const ip = ipRef.current!.value.trim();
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
