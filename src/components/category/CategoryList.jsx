/* eslint-disable linebreak-style */
import React from 'react';
import Category from './Category';

export default function CategoryList() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="1"
              title="Moviles"
              uri="moviles"
              image="https://images-na.ssl-images-amazon.com/images/G/30/es-certifiedrefurbished/AR_GW_MobileQuadCard_Wireless_420x420_Feb20._SX300_CB422785977_.jpg"
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="2"
              title="Hogar y Cocina"
              uri="hogar-cocina"
              image="https://images-na.ssl-images-amazon.com/images/G/30/es-certifiedrefurbished/AR_GW_MobileQuadCard_Kitchen_420x420_Feb20._SX600_CB422785982_.jpg"
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="3"
              title="Camaras"
              uri="camaras"
              image="https://images-na.ssl-images-amazon.com/images/G/30/es-certifiedrefurbished/AR_GW_MobileQuadCard_Camera_420x420_Feb20._SX600_CB422785982_.jpg"
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="4"
              title="Portatiles"
              uri="portatil"
              image="https://images-na.ssl-images-amazon.com/images/G/30/es-certifiedrefurbished/AR_GW_MobileQuadCard_PC2_420x420_Feb20._SX600_CB422785982_.jpg"
            />
          </div>
        </div>

        <div className="category__banner__image">
          <img style={{ height: 'auto', width: '60%' }} src="https://m.media-amazon.com/images/G/30/shazam/ES-2-970-250-Pet3X._V410793902_.jpg" alt="" />
        </div>

        {/* <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Category
              id="8"
              title="Decoracion"
              uri="decoracion"
              image="https://images-na.ssl-images-amazon.com/images/G/30/x-site/2016/4/Blackjack/Home._SX1050_CB485980859_.jpg"
            />
          </div>
        </div> */}

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="5"
              title="Electro Hogar"
              uri="electro-hogar"
              image="https://images-na.ssl-images-amazon.com/images/G/30/amazonlaunchpad/GW/2020/July/HOME_QCard-M_SmartHome_420x420._SX600_CB430635197_.jpg"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="6"
              title="Cocina"
              uri="cocina"
              image="https://images-na.ssl-images-amazon.com/images/G/30/amazonlaunchpad/GW/2020/July/HOME_QCard-M_Kitchen_420x420._SX600_CB430635197_.jpg"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="7"
              title="Personal"
              uri="personal"
              image="https://images-na.ssl-images-amazon.com/images/G/30/amazonlaunchpad/GW/2020/July/BRAND_QCard-M_Tech_420x420._SX600_CB430635171_.jpg"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <Category
              id="7"
              title="Personal"
              uri="personal"
              image="https://images-na.ssl-images-amazon.com/images/G/30/es-certifiedrefurbished/AR_GW_MobileQuadCard_Kitchen_420x420_Feb20._SX600_CB422785982_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
