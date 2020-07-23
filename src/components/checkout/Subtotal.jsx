import React from 'react';
import CurrencyFormat from 'react-currency-format';

// CSS
import '../../assets/css/checkout/Subtotal.css'

// Redux
import { useStateValue } from '../../context/StateProvider';

export default function Subtotal() {

  const [{ cart }] = useStateValue();
  let localStorageCart = JSON.parse(localStorage.getItem('cart'));

  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (
                {(localStorageCart !== null && localStorageCart?.length > 0) ? localStorageCart.length : 0} items): <strong>{` ${value} `}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={(localStorageCart !== null && localStorageCart?.length > 0) ? localStorageCart?.reduce((amount, item) => item.price + amount, 0) : 0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
