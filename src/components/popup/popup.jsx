import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import './popup.scss';


const popupRoot = document.getElementById('popup');

const Popup = ({ title, isOpen, setOpen, children }) => {

  const popupRef = useRef(null);
  const closeRef = useRef(null);

  const closePopup = (evt) => {
    if (evt.target === popupRef.current || evt.target === closeRef.current) {
      document.querySelector('body').classList.toggle('lock');
      setOpen(false);
    }
  }

  const PopupWindow = () => {
    return (
      <div
        className="popup"
        ref={popupRef}
        onClick={closePopup}
      >
        <div className="popup__wrapper">
          <div className="popup__header">
            {title}
            <button
              type="button"
              className="popup__close"
              ref={closeRef}
            >
              &times;
            </button>
          </div>
          <div className="popup__body">
            {children}
          </div>
        </div>
      </div>
    )
  }

  if (isOpen) {
    return createPortal(<PopupWindow />, popupRoot);
  }
}

export default Popup;
