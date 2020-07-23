/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

// Components
import Header from '../header/Header';

// Reducer
// import { useStateValue } from '../../context/StateProvider';

// Firebase
import { getAllProducts } from '../../server/actions/actionsProducts';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  // const [state,] = useStateValue();

  let array = [];
  useEffect(() => {

    getAllProducts()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array = [...array, doc.data()];
        });

        setProducts(array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ backgroundColor: 'white' }}>
        <div className="row">
          <div
            className="col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 mt-4"
            style={{
              display: 'flex', flexDirection: 'column', borderRight: '1px solid #d2d2d2',
            }}
          >
            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Lo mas vendido</p>
            <div style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', fontSize: '0.9rem',
            }}
            >
              <Link to="/">Electronica</Link>
              <Link to="/">Deportes y Aire Libre</Link>
              <Link to="/">Otros Productos</Link>
              <Link to="/">Celulares Liberados</Link>
              <hr style={{ color: 'black', height: '100%', width: '100%' }} />
            </div>
            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Filtrar Por</p>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10 mt-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 className="lead" style={{ fontSize: '1.8rem' }}>Revision de Celulares</h4>
            <small className="text-muted">
              Encuentra precios bajos en smartphones en Amazon Renewed.
              Elige entre una variedad de modelos de smartphones reacondicionados y de segunda mano,
              incluidos el iPhone 8, iPhone X, Galaxy S9 y S10, y muchos más,
              que parecen y funcionan como nuevos, pero a precios asequibles.
            </small>
            <hr style={{ color: 'black', height: 'auto', width: '100%' }} />
            <div className="row" style={{ paddingLeft: '20px' }}>

              {(products.length > 0)
                ? products.map((product) => {
                  // console.log(product.id);
                  return (
                    <div key={product.id} className="col-12">
                      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
                        <img src={product.image} alt={product.name} style={{ height: 'auto', maxHeight: '230px', width: '230px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
                          <Link
                            to={{
                              pathname: `/product/${product.id}`,
                              props: {
                                id: product.id,
                                name: product.name,
                                description: product.description,
                                image: product.image,
                                price: product.price,
                                rating: product.rating,
                              },
                            }}
                          >
                            {product.description}
                          </Link>
                          <p className="text-muted" style={{ fontSize: '0.7rem' }}>
                            De &nbsp;
                            {product.name}
                          </p>
                          <p style={{ color: '#B22A07' }}>
                            <strong>
                              USD
                              {product.price}
                            </strong>
                          </p>
                          <ReactStars
                            value={product.rating}
                            size={24}
                            isHalf
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                      <hr style={{ color: 'black', height: 'auto', width: '100%' }} />
                    </div>
                  );
                })
                : <h4 className="display-4">Cargando...</h4>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
