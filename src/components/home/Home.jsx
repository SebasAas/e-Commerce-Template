/* eslint-disable linebreak-style */
import React from 'react';
import Header from '../header/Header';
import CategoryList from '../category/CategoryList';

// CSS
import '../../assets/css/home/Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className="home container-fluid">

        <div className="row home__row__carrusel">
          <div id="carouselExampleControls" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner" style={{ height: '100vh' }}>
              <div className="carousel-item active home__image">
                <img className="d-block" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB410675382_.jpg" alt="First slide" />
              </div>
              <div className="carousel-item home__image">
                <img className="d-block" src="https://images-eu.ssl-images-amazon.com/images/G/30/AmazonMusic/2020/WeeklyBuild/071720/ES-ES_071020_SummerSessions_ACQ_GW_Hero_D_1500x600_CV5._CB411033025_.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item home__image">
                <img className="d-block" src="https://images-eu.ssl-images-amazon.com/images/G/30/marketing/prime/gateway/2018/GRD_DesktopHero_Fast-shipping_1500X600_Spain._CB431600720_.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item home__image">
                <img className="d-block" src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/LFE_S1/LITT_S1_GWBleedingHero_POST_XSite_1500x600_PV_es-ES._CB409205038_.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{ height: '400px' }}>
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" style={{ height: '400px' }}>
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="row home__row__products" style={{ marginTop: '-350px' }}>
          <CategoryList />
        </div>

      </div>
    </>
  );
}
