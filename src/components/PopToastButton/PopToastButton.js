import React from 'react'

import Button from '../Button'
import styles from '../ToastPlayground/ToastPlayground.module.css'

function PopToastButton ({ disabled }) {
  return (
    <div className={styles.row}>
      <div className={styles.label} />
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        <Button disabled={disabled}>
            Pop Toast!
        </Button>
      </div>
    </div>
  )
}

export default React.memo(PopToastButton)
