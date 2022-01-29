import { useContext } from "react"
import { GlobalState } from "../../../GlobalState"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

export default function Categories() {
  const state = useContext(GlobalState)
  const [categories] = state.categoriesAPI.categories
  const [category, setCategory] = state.productsAPI.category

  const { t } = useTranslation()

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <>
      <FormControl sx={{ m: 0, minWidth: 120 }} className="categories__form">
        <InputLabel id="demo-simple-select-autowidth-label"><h4>{t('categories-name')}</h4>
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category ? category : ""}
          // value={category}
          onChange={handleChange}
          autoWidth
          label="Categories"
        >
          <MenuItem value="">
            <em className="categories__item">{t('all-products')}</em>
          </MenuItem>
          {
            categories.map((category) => {
              return (
                <MenuItem value={"category=" + category._id} key={category._id}
                          className="categories__item">
                  {/*{category.name}*/}

                  {
                    category.name === "платки" &&
                    <p>{t('category-name-1')}</p>
                  }
                  {
                    category.name === "ковры" &&
                    <p>{t('category-name-2')}</p>
                  }
                  {
                    category.name === "постели" &&
                    <p>{t('category-name-3')}</p>
                  }
                  {
                    category.name === "полотенца" &&
                    <p>{t('category-name-4')}</p>
                  }
                  {
                    category.name === "сумочки" &&
                    <p>{t('category-name-5')}</p>
                  }
                  {
                    category.name === "золото" &&
                    <p>{t('category-name-6')}</p>
                  }
                  {
                    category.name === "посуда" &&
                    <p>{t('category-name-7')}</p>
                  }
                  {
                    category.name === "текстиль" &&
                    <p>{t('category-name-8')}</p>
                  }
                  {
                    category.name === "мебель" &&
                    <p>{t('category-name-9')}</p>
                  }

                </MenuItem>

              )
            })
          }
        </Select>
      </FormControl>
    </>
  )
}
