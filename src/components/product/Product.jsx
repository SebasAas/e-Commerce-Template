/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import Header from '../header/Header';

// Reducer
import { useStateValue } from '../../context/StateProvider';

// Firebase
import { getProduct } from '../../server/actions/actionsProducts';

export default function Product(props) {
  const [dataProduct, setDataProduct] = useState(false);

  const [state, dispatch] = useStateValue();

  const addToCart = (e) => {

    const item = {
      id: dataProduct.id,
      title: dataProduct.name,
      description: dataProduct.description,
      price: parseFloat(dataProduct.price),
      rating: parseFloat(dataProduct.rating),
      image: dataProduct.image,
    }

    dispatch({
      type: 'ADD_ITEM_CART',
      item,
    });

    if (JSON.parse(localStorage.getItem('cart')) === null) {
      localStorage.setItem('cart', JSON.stringify([item]));
    } else {
      let localStorageCart = JSON.parse(localStorage.getItem('cart'));
      localStorageCart = [...localStorageCart, item];
      localStorage.setItem('cart', JSON.stringify(localStorageCart));
    }
  };

  useEffect(() => {
    const { id } = props.match.params;

    const resp = getProduct(id);

    resp.then((res) => {
      setDataProduct(res.data());
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  // console.log(id, name, description, image, price, rating);

  return (
    <div style={{ backgroundColor: 'white', height: '100vh', width: 'auto' }}>
      <Header />
      {(dataProduct)
        ? (
          <div className="container-fluid" style={{ marginTop: '30px' }}>
            <div className="row" style={{ paddingRight: '15px', backgroundColor: 'white' }}>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={dataProduct.image} alt={dataProduct.name} style={{ height: '400px', width: '250px' }} />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-3">
                <h3 className="lead">{dataProduct.description}</h3>
                <hr style={{ color: 'black', height: 'auto', width: '100%' }} />
                <ReactStars
                  value={dataProduct.rating}
                  size={24}
                  isHalf
                  edit={false}
                  activeColor="#ffd700"
                />
                <p style={{ fontSize: '0.9rem', marginTop: '20px' }}>
                  <strong>El producto parece nuevo y funciona como tal. Viene con la Garantía de Amazon Renewed de un año.</strong>

                  Aunque no está certificado por Apple, este producto ha sido inspeccionado y testado por proveedores cualificados por Amazon. Puede que el producto tenga arañazos o abolladuras insignificantes y una batería con al menos un 80 % de capacidad. Puede que la caja sea genérica y que los accesorios no sean genuinos, pero serán compatibles y totalmente funcionales. En caso de no estar satisfecho, se admite el cambio o reembolso de este producto durante el plazo de un año a partir de su recepción. Más información

                  Pantalla panorámica LCD Multi-Touch de 4,7 pulgadas (en diagonal) con tecnología IPS
                  Cámara de 12 Mpx con estabilización óptica de imagen y vídeo 4K y Cámara FaceTime HD de 7 Mpx con Retina Flash
                  Touch ID. Usa Touch ID para pagar en tiendas, apps y páginas web con tu iPhone
                  Resistencia al agua y al polvo IP67 (hasta 1 metro de profundidad durante un máximo de 30 minutos)
                </p>
              </div>
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-3"
                style={{
                  border: '1px solid #d6d6d6', borderRadius: '2px', padding: '15px',
                }}
              >
                <h4 style={{ color: '#B22A07', fontSize: '1.1rem' }}>
                  $
                  {dataProduct.price}
                </h4>
                <p style={{ color: '#DD0052', fontSize: '0.9rem' }}>Este producto no puede ser enviado a la dirección de envío seleccionada. Seleccione una dirección de envío diferente.</p>
                <h3 style={{ color: 'green', fontSize: '1.1rem' }}>En Stock.</h3>
                <div style={{
                  height: 'auto',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '50px',
                }}
                >
                  <button
                    style={{
                      backgroundColor: '#F1C65B',
                      border: '1px solid grey',
                      height: '35px',
                      width: '200px',
                      borderRadius: '3px',
                    }}
                    type="button"
                    onClick={addToCart}
                  >
                    <span className="lead" style={{ fontSize: '15px' }}>Añadir a la cesta</span>
                  </button>
                </div>

                <div style={{
                  height: 'auto',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '10px',
                }}
                >
                  <button
                    style={{
                      backgroundColor: '#E59026',
                      border: '1px solid grey',
                      height: '35px',
                      width: '200px',
                      borderRadius: '3px',
                    }}
                  >
                    <span className="lead" style={{ fontSize: '15px' }}>Compra directa</span>
                  </button>
                </div>
                <hr style={{ color: 'black', height: 'auto', width: '100%' }} />
                <div style={{
                  height: 'auto', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '25px',
                }}
                >
                  <p style={{ marginBottom: '0px' }}>Envios a Argentina</p>
                </div>
                <hr style={{ color: 'black', height: 'auto', width: '100%' }} />
              </div>
            </div>
          </div>
        )
        : <h1>Cargando...</h1>}
    </div>
  );
}
