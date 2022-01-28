import React, {useState, useEffect, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import axios from 'axios';
import Logo from "./images/logo.jpg"
import GlobeIcon from './GlobeIcon';


import { useTranslation } from 'react-i18next'


export default function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [search, setSearch] = state.productsAPI.search
    const [infor] = state.userAPI.infor
    const [handleSearch, setHandleSearch] = useState('')


  const { t } = useTranslation()




    const history = useHistory();
    
    const handleSubmit = (e) => {
      e.preventDefault()
      setSearch(handleSearch)
      setHandleSearch('')
      history.push("/products")
    }
    
    const logoutUser = async() => {
       await axios.get(`http://localhost:5000/user/logout`)
       localStorage.removeItem("Login")
       window.location.href = ('/')
    }
    useEffect(() => {
    }, [search])




    return (
    <header>
      <div className="container">
        <div className="header__top--container">
          <div className="logo__top">
            <Link to="/"><img src={Logo} alt="" className="logo__image"/></Link>
          </div>
            <div className="languages">
              <h2>{t('languages-one')}</h2>
            </div>
            <div className="navbar__container">
            <label htmlFor="menu__input"><i className="fas fa-bars menu__icon header__icon"/></label>

            <input type="checkbox" name="" id="menu__input" className="menu__input" />      
            <label htmlFor="menu__input" className="nav__overlay"/>
              <ul className="navbar__list">
                <li>
                  <div className="nav__header">
                  <div className="flexrow infor__icon--mobile">
                      <i className="far fa-user"/>
                      <p>{infor[0]}</p>
                  </div>
                    <div>
                        <label htmlFor="menu__input"><i className="fas fa-times-circle"/></label>
                    </div>
                  </div>
                </li>
                <li><Link to="/">{t('header-title-one')}</Link></li>
                <li><Link to="/products">{t('header-title-two')}</Link></li>
                {
                  isAdmin
                  ? <li><Link to="/admin">{t('header-title-6')}</Link></li>
                  : <li><Link to="/history">{t('header-title-3')}</Link></li>
                }
                {
                  isLogged
                  ? <li><Link to="/" onClick={logoutUser} style={{display: "flex", alignItems: "center"}}>LOGOUT&nbsp; <i className="fal fa-sign-out"/></Link></li>
                  : <>
                  <li><Link to="/login">{t('header-title-4')}</Link></li>
                  <li><Link to="/register">{t('header-title-5')}</Link></li>
                  </>
                
                }
                
              </ul>
            </div>
        </div>

        <div className="header__bottom--container">
          <div className="logo__bottom">
          <Link to="/"><img src={Logo} alt="" className="logo__image"/></Link>
          </div>
          <div className="heart__icon">
            <Link to="/products"><i className="fas fa-heart header__icon"/></Link>
          </div>
          <div className="search__header--container">
              <form onSubmit={handleSubmit} className="search__form">
                <input name="" placeholder="Search for products..." className="search__input"
                value={handleSearch} onChange={(e) => setHandleSearch(e.target.value)}/>
                <button type="submit">
                <i className="fas fa-search"/>&nbsp;
                <p>{t('fa-search-1')}</p>
                </button>
              </form>
          </div>
          <div className="flexrow infor__icon">
          <i className="far fa-user header__icon"/>
          <p>{infor[0]}</p>
          </div>

          <GlobeIcon />

          <div className="flexrow cart" style={{marginRight: "8px"}}>
            <Link to="/cart">
              <i className="fas fa-shopping-cart header__icon"/>
            </Link>
          <p>{cart.length}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
