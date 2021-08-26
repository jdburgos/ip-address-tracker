/** React core **/
import React from "react";

/** Styles **/
import styles from "./Input.module.scss";

export const Input = () => {
  return (
    <div>
      <input className={styles.input} type='text' placeholder='Search for any IP address or domain' />
      <button className={styles.input__btn} type='button'>&gt;</button>
    </div>
  );
};
