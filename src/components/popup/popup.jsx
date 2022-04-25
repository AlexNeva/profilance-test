import React, { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../store/popupSlice';
import './popup.scss';


const popupRoot = document.getElementById('popup');

const Popup = ({ title, children }) => {

  const popupRef = useRef(null);
  const closeRef = useRef(null);

  const popups = useSelector(state => state.popups.popups);

  const { type } = popups.find(popup => popup.isActive) || '';

  const dispatch = useDispatch()

  const closePopup = (evt) => {
    if (evt.target === popupRef.current || evt.target === closeRef.current) {
      document.querySelector('body').classList.remove('lock');
      dispatch(setActive(type))
    }
  }

  const element = useMemo(() => document.createElement('div'), []);

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

  useEffect(() => {
    popupRoot.appendChild(element);

    return () => {
      popupRoot.removeChild(element);
    }
  })

  return createPortal(<PopupWindow />, element);
}

export default Popup;
