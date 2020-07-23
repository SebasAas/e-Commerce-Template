import React, { useState, useEffect } from 'react';

// Components
import Header from '../header/Header';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import Books from './Books';

// CSS
import '../../assets/css/checkout/Checkout.css'

export default function Checkout() {
  // const [{ cart }] = useStateValue();

  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('cart')))
  let localStorageCart = JSON.parse(localStorage.getItem('cart'));

  useEffect(() => {
    console.log(storage)
  }, [storage])

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ height: '100%', backgroundColor: 'white' }}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-7 col-lg-9 col-xl-9 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner ads" />
          </div>
          <div className="col-12 col-sm-6 col-md-5 col-lg-3 col-xl-3 mt-3 pr-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="checkout__right">
              <Subtotal />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-7 col-lg-9 col-xl-9 mt-3">
            {localStorageCart === null || localStorageCart?.length === 0 ? (
              <div>
                <h2 className="display-2" style={{ fontSize: '2.5rem' }}>Your Shopping Cart is empty</h2>
                <p>
                  You have not items in your cart. To buy one or more
                  items, click "Add to cart" next to the item
            </p>
              </div>
            ) : (
                <div>
                  <h2 className="checkout__title display-4" style={{ fontSize: '2.5rem' }}>Your Shopping Cart</h2>
                  {/* List out all of the checkout products */}
                  <CheckoutProduct
                    changeValue={setStorage}
                  />
                </div>
              )}
          </div>
          <div className="col-0 col-sm-6 col-md-5 col-lg-3 col-xl-3 mt-4" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Books />
          </div>
        </div>
      </div>
    </>
  );
}
