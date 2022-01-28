import React, { useContext } from "react"
import { GlobalState } from "../../GlobalState"
import ProductItem from "../MainPage/Products/ProductItem"
import {Button} from "@mui/material"
import Loading from "../MainPage/support/Loading"
import Viewers from './Viewers';
import Сinema from './Sinema';
import СinemaTwo from './SinemaTwo'
import { useTranslation } from 'react-i18next';


export default function ProductHome() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [result] = state.productsAPI.result
    const [page, setPage] = state.productsAPI.page

  const { t } = useTranslation()

    return (
        <div className="main">
        <div className="container">
             <Viewers/>
                <СinemaTwo />
                    <div className="container__item">
                      <h2 className="page__header">{t('page-header-text1')}</h2>
                    {
                        products.length >0
                        ? (<div className="product__home--container">
                            {
                                products.map((product) => {
                                    return (
                                        <ProductItem key={product._id} product={product}/>
                                    )
                                })
                            }
                        </div>)
                        : (<Loading/>)          }
                    <div className="button__seemore">
                        {
                           result.length > 0
                           ? ""
                           : <Button variant="contained" color="success"
                           onClick={() => setPage(page+1)}>Смотреть ещё</Button>
                        }
                    </div>
                    </div>
          <Сinema />
                <div>
                    {/*<Advertise/>*/}
                </div>
        </div>
        </div>
    )
}
