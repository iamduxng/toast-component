import React from 'react'

import styles from '../ToastPlayground/ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastTypeSelection ({ type, setType }) {
  console.log('ToastTypeSelection rendered')
  
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div
        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
      >
        {VARIANT_OPTIONS.map(option => (
          <label key={option} htmlFor="variant-notice">
            <input
              id="variant-notice"
              type="radio"
              name="variant"
              value={option}
              checked={option === type}
              onChange={(e) => setType(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}

export default React.memo(ToastTypeSelection)
