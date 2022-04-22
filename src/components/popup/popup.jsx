import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../store/popupSlice';
import './popup.scss';

const Popup = ({ title, children }) => {

  const popupRef = useRef(null);
  const closeRef = useRef(null);

  const popups = useSelector(state => state.popups.popups);

  const { type } = popups.find(popup => popup.isActive) || '';

  const dispatch = useDispatch()

  const closePopup = (evt) => {

    if (evt.target === popupRef.current || evt.target === closeRef.current) {
      dispatch(setActive(type))
    }
  }

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
          // onClick={closePopup}
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

export default Popup;
