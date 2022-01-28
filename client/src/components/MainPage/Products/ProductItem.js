import {Button} from "@mui/material"
import React, { useContext } from "react"
import Swal from "sweetalert2"
import { GlobalState } from "../../../GlobalState"
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next';

export default function ProductItem({product}) {
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    const[isLogged] = state.userAPI.isLogged

  const { t } = useTranslation()

    const addToCart =() => {
        if(isLogged) {
            addCart(product)
        }
        else {
            Swal.fire("Fail", "Please login to be able to shop", "error")
        }
    }

    return (
        <div className="product__container">
            {/* <div className="product__overlay"> */}
            <Link to={`/product/${product._id}`}>
            <div className="product__image--container">
                <img src={product.images.url} alt={product.title}/>
            </div>
            <div/>
            <div className="product__content--container">
                <div className="product__content">
                     {
                         product.title.length > 20 
                         ? (<p>{product.title.substring(0, 26)}...</p>)
                         : (<p title="product-title">{product.title}</p>)
                     }
                     <h3>{t('product-price')}: ${product.price}</h3>
                </div>
            </div>
            </Link>
            <div className="product__btn">
            <Button variant="contained" color="primary" className="addCart__btn"
            onClick={addToCart}><i className="fas fa-shopping-cart header__icon"/></Button>
            </div>
            {/* </div> */}
        </div>
    )
}
