import React from 'react';

import { ToastContext, DEFAULT_TOAST_TYPE } from '../ToastProvider';
import ToastMessage from '../ToastMessage';
import ToastTypeSelection from '../ToastTypeSelection';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';
import PopToastButton from '../PopToastButton/PopToastButton';

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [type, setType] = React.useState(DEFAULT_TOAST_TYPE)
  const { addToast } = React.useContext(ToastContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    addToast(message, type)
    setMessage('')
    setType(DEFAULT_TOAST_TYPE)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <ToastMessage message={message} setMessage={setMessage} />
        <ToastTypeSelection type={type} setType={setType} />
        <PopToastButton disabled={message === ''} />
      </form>
    </div>
  );
}

export default React.memo(ToastPlayground);
