import {Button} from "@mui/material"
import React, { useContext } from "react"
import Swal from "sweetalert2"
import { GlobalState } from "../../../GlobalState"
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next';

export default function ProductItem({product}) {
  console.log(product)
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    const[isLogged] = state.userAPI.isLogged

    // const [category] = state.productsAPI.category

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

            <Link to={`/product/${product._id}`}>
            <div className="product__image--container">
                <img src={product.images.url} alt={product.title}/>
            </div>
            <div/>
            <div className="product__content--container">
                <div className="product__content">
                     {/*{*/}
                     {/*    product.title.length > 20*/}
                     {/*    ? (<p>{product.title.substring(0, 26)}...</p>)*/}
                     {/*    : (<p title="product-title">{product.title}</p>)*/}
                     {/*}*/}

                  {
                    product.title === "гостиная" &&
                    <p title="product-title">{t('product-title-1')}</p>
                  }
                  {
                    product.title === "миски" &&
                    <p title="product-title">{t('product-title-2')}</p>
                  }
                  {
                    product.title === "покрывало" &&
                    <p title="product-title">{t('product-title-3')}</p>
                  }
                  {
                    product.title === "сумка" &&
                    <p title="product-title">{t('product-title-4')}</p>
                  }
                  {
                    product.title === "посуда" &&
                    <p title="product-title">{t('product-title-5')}</p>
                  }



                     <h3>{t('product-price')}: ${product.price}</h3>
                </div>
            </div>
            </Link>
            <div className="product__btn">
            <Button variant="contained" color="primary" className="addCart__btn"
            onClick={addToCart}><i className="fas fa-shopping-cart header__icon"/></Button>
            </div>

        </div>
    )
}
