import { Button } from "@mui/material"
import React, { useEffect } from "react"
import { useContext, useState } from "react"
import { useParams } from "react-router"
import Swal from "sweetalert2"
import { GlobalState } from "../../../../GlobalState"
import { useTranslation } from 'react-i18next';

export default function ProductDetail() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [isLogged] = state.userAPI.isLogged
    const [productDetail, setProductDetail] = useState([])
    const params = useParams()

    const { t } = useTranslation()

    useEffect(() => {
        if(params.id) {
            products.forEach((product) => {
                if(product._id === params.id) {
                    setProductDetail(product)
                }
            })
        }
    }, [params.id, products])

    const addToCart =() => {
        if(isLogged) {
            addCart(productDetail)
        }
        else {
            Swal.fire("Fail!", "Please login to be able to shop", "error")
        }
    }
    
    if(productDetail.length === 0) return null
    return (
        <div className="main">
        <div className="container__item container">
        <div className="product__detail--container">
            <div style={{margin: "auto", minWidth: "35%"}}>
            <div className="detail__image--container">
                 <img src={productDetail.images.url} alt={productDetail.title} className="detail__image"/>
            </div>
            </div>
            <p className="border__column" />
            <div className="detail__content--container">
                <div className="detail__content">
                {/*<p>Категория: <span className="product__detail--title">{productDetail.category}</span></p>*/}
                <h2 className="product__detail--title">
                    {/*{productDetail.title}*/}
                    {
                        productDetail.title === "гостиная" &&
                        <p title="product-title">{t('product-title-1')}</p>
                    }
                    {
                        productDetail.title === "миски" &&
                        <p title="product-title">{t('product-title-2')}</p>
                    }
                    {
                        productDetail.title === "покрывало" &&
                        <p title="product-title">{t('product-title-3')}</p>
                    }
                    {
                        productDetail.title === "сумка" &&
                        <p title="product-title">{t('product-title-4')}</p>
                    }
                    {
                        productDetail.title === "посуда" &&
                        <p title="product-title">{t('product-title-5')}</p>
                    }
                </h2>
                <h2>{t('product-price')}: ${productDetail.price}</h2>
                <p>{productDetail.description}</p>

                <p>
                    {/*{productDetail.content}*/}
                    {
                        productDetail.content === "Производство Китай." &&
                        <p >{t('product-content-1')}</p>
                    }

                    {
                        productDetail.content === "производство Турция" &&
                        <p>{t('product-content-2')}</p>
                    }

                    {
                        productDetail.content === "Производство Иран" &&
                        <p>{t('product-content-3')}</p>
                    }

                </p>

                </div>
                <div>
                    <Button variant="contained" color="success" onClick={addToCart}
                    className="detail__button">{t('detail_button')}</Button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
