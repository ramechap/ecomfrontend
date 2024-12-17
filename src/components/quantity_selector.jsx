import '../styles/quantity-selector.css'; // Import the CSS

import React, { useState, useRef } from 'react';
import { showInfoToast } from '../utils/toast_utils';

function QuantitySelector({
  maxQuantity,
  onChange,
  increaseErrorMessage = "Cannot exceed the maximum quantity.",
  decreaseErrorMessage = "Cannot go below the minimum quantity.",
  vertical,
}) {
  const [quantity, setQuantity] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const updateQuantity = (newValue) => {
    if (newValue < 0) {
      // setErrorMessage(decreaseErrorMessage);
      showInfoToast({ message: decreaseErrorMessage });
      return;
    }
    if (maxQuantity) {
      if (newValue > maxQuantity) {
        showInfoToast({ message: increaseErrorMessage });
        // setErrorMessage(increaseErrorMessage);
        return;
      }
    }

    setQuantity(newValue);
    // setErrorMessage('');
    if (onChange) onChange(newValue);
  };

  const handleIncrease = () => {
    updateQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(quantity - 1);
  };

  return (
    <div className="quantity-selector-wrapper">
      <div className="quantity-selector" style={vertical ? { flexDirection: 'column', flexFlow: 'column-reverse', padding: '5px 0px' } : {padding: '5px 5px', flexDirection:'row'}}>
        <button
          className="btn"
          onClick={() => {
            handleDecrease();
          }}
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button
          className="btn"
          onClick={() => {
            handleIncrease();
          }}
        >
          +
        </button>
      </div>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
    </div>
  );
}

export default QuantitySelector;

