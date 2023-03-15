import React from 'react'
import useKeydown from '../../hooks/use-keydown';

export const DEFAULT_TOAST_TYPE = 'notice'

export const ToastContext = React.createContext();

function ToastProvider ({ children }) {
  const [ toasts, setToasts ] = React.useState([])

  const addToast = (message, type) => {

    if (message === '') return

    const newToast = {
      uid: crypto.randomUUID(),
      message,
      type
    }
    setToasts((toasts) => [...toasts, newToast])
  }

  const hideToast = (removedUid) => {
    const remainingToasts = toasts.filter(toast => removedUid !== toast.uid)
    setToasts(remainingToasts)
  }

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])
  useKeydown('Escape', handleEscape)

  const allContext = {
    toasts,
    addToast,
    hideToast,
  }

  return (
    <ToastContext.Provider value={allContext}>
      { children }
    </ToastContext.Provider>
  )
}

export default ToastProvider
