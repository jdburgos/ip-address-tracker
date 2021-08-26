/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Card.module.scss';

export const Card = props => {
  const className = props.className ? props.className : '';
  const classes = `${styles.card} ${className}`.trim();

  return <div className={classes}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
};
