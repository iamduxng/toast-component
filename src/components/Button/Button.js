import React from 'react';

import styles from './Button.module.css';

function Button({ className = '', disabled = false, ...delegated }) {
  const stateClasses = disabled ? styles.btnDisabled : ''
  const buttonClasses = `${styles.button} ${className} ${stateClasses}`

  return (
    <button
      className={buttonClasses}
      {...delegated}
    />
  );
}

export default Button;
