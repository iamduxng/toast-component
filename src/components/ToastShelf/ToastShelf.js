import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider'

function ToastShelf() {
  const { toasts, hideToast } = React.useContext(ToastContext)

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map(toast => (
        <li key={toast.uid} className={styles.toastWrapper}>
          <Toast type={toast.type} hideToast={() => hideToast(toast.uid)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
