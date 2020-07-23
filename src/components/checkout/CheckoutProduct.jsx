/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

// CSS
import '../../assets/css/checkout/CheckoutProduct.css';

// Redux
// import { useStateValue } from '../../context/StateProvider';

export default function CheckoutProduct({ changeValue }) {
  // const [{ cart }, dispatch] = useStateValue();

  const [itemsCart, setItemsCart] = useState(JSON.parse(localStorage.getItem('cart')));

  useEffect(() => {
    console.log(itemsCart);
  }, [itemsCart]);

  const removeFromCart = (e) => {
    let localStorageCart = JSON.parse(localStorage.getItem('cart'));
    localStorageCart = localStorageCart.filter(item => item.id !== e.target.value);

    setItemsCart(localStorageCart);
    changeValue(localStorageCart);
    localStorage.setItem('cart', JSON.stringify(localStorageCart));

    // dispatch({
    //   type: 'REMOVE_ITEM_CART',
    //   id,
    // });
  };

  return (
    <div>
      {itemsCart.map((item) => (
        <div key={item.id}>
          <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={item.image} alt="product" />
            <div className="checkoutProduct__info">
              <Link to={`product/${item.id}`}><p className="checkoutProduct__title">{item.description}</p></Link>
              <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{item.price}</strong>
              </p>
              <ReactStars
                value={item.rating}
                size={24}
                isHalf
                edit={false}
                activeColor="#ffd700"
              />
              <button type="button" value={item.id} onClick={removeFromCart}>Remove item to cart</button>
            </div>
          </div>
          <hr style={{ color: 'black', height: 'auto', width: '100%' }} />
        </div>
      ))}
    </div>
  );
}
