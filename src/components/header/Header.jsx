import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../../assets/css/header/Header.css';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

// Reducer
import { useStateValue } from '../../context/StateProvider';

// Firebase
import { auth } from '../../server/firebase';

export default function Header() {
  // Me suscribo al Contexto y obtengo los valores del contexto actual
  // const [state, dispatch] = useStateValue(); donde dentro de state tendria el estado del contexto
  // en el caso de abajo, hago un destructuring y acceso al valor de cart y dispatch no lo voy
  // a necesitar ya que en el header no vamos a despachar ninguna accion

  const [{ user }] = useStateValue();
  let localStorageCart = JSON.parse(localStorage.getItem('cart'));

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="container-fluid container__header">
      <nav className="navbar sticky-top navbar-light header">

        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <div className="header__logo__component">
              <Link to="/">
                <img
                  className="header__logo"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="logo"
                />
              </Link>
            </div>
          </div>


          {/* search box */}
          <div className="col-12 col-sm-12 col-md-10 col-lg-6 col-xl-7 header__search__component">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-secondary dropdown-toggle header__button__dropdown"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <span className="header__button__dropdown__span">Departamentos</span>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <input type="text" className="form-control header__input__search" aria-label="Text input with dropdown button" style={{ marginTop: '1px' }} />
              <div className="input-group-append" style={{ marginTop: '1px' }}>
                <button className="input-group-text header__button__search" htmlFor="inputGroupSelect02"><SearchIcon className="header__searchIcon" /></button>
              </div>
            </div>
          </div>


          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
            {/* 4 links */}
            <div className="header__nav">

              {/* Login / Account */}
              <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                  <span className="header__optionLineOne">Hello {user?.email}</span>
                  <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                </div>
              </Link>

              {/* Orders */}
              <Link to="/login" className="header__link">
                <div className="header__option">
                  <span className="header__optionLineOne">Return</span>
                  <span className="header__optionLineTwo">& Orders</span>
                </div>
              </Link>

              {/* Prime */}
              <Link to="/login" className="header__link">
                <div className="header__option">
                  <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
                </div>
              </Link>

              {/* Cart */}
              <Link to="/checkout" className="header__linkCart">
                <div className="header__optionCart">
                  {/* Shopping basket icon */}
                  <ShoppingCartOutlinedIcon />
                  {/* Number of item in the cart */}
                  <span className="header__optionLineTwo header__cartCount">
                    {(localStorageCart !== null && localStorageCart?.length > 0) ? localStorageCart.length : 0}
                  </span>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </nav>
      <nav className="d-none d-sm-block navbar sticky-top navbar-light header__two">
        <div className="row" style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <div className="header__ship__country">
              <LocationOnOutlinedIcon style={{ color: 'white' }} />
              <Link to="/login" className="header__link">
                <div className="header__option">
                  <span className="header__optionLineOne">Enviar a</span>
                  <span className="header__optionLineTwo">Argentina</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-lg-10 col-xl-10">
            <div className="header__nav__two__">
              <Link to="/login" className="header__link">
                Lo Mas Vendido
              </Link>
              <Link to="/login" className="d-none d-md-block header__link">
                AmazonBasics
              </Link>
              <Link to="/login" className="d-none d-sm-block header__link">
                Ofertas
              </Link>
              <Link to="/login" className="d-none d-md-block d-print-block header__link">
                Chollos
            </Link>
              <Link to="/login" className="header__link">
                Ultimas Novedades
              </Link>
              <Link to="/login" className="header__link">
                Tienda Electronica
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
