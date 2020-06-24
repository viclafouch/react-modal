import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './modal.css'

const modalElement = document.getElementById('modal-root')

export function Modal({ onClose, children, fade = false }) {

  useEffect(() => {
    const handleEscape = event => {
      if (event.keyCode === 27) onClose()
    }

    document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [onClose])

  return createPortal(
    <div className={`modal ${fade ? 'modal-fade' : ''}`}>
      <div className="modal-overlay" onClick={onClose} />
      <span role="button" className="modal-close" aria-label="close" onClick={onClose}>
        x
      </span>
      <div className="modal-body">
        {children}
      </div>
    </div>,
    modalElement
  )
}

export default Modal
