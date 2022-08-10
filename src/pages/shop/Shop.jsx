import React, { useState } from 'react'
import Header from './Header'
import Price from './Price'
import Color from './Color'
import Size from './Size'
import Search from './Search'
import Products from './Products'
import NextPrev from './NextPrev'
import { useFetch } from '../../useFetch'

const Shop = ({detailProduct  , favorateProduct}) => {
  const [products , loading , error  ] = useFetch('https://fakestoreapi.com/products')
  const [pen , setPen] = useState(false);

  const [ward , setWard] = useState([]);
  const filterProduct = (n1 , n2) => {
   const rman = products.filter(product => product.price > n1 && product.price < n2)
   setWard(rman)
   setPen(true)
}

  return (
    <>
        <Header />
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-3 col-md-12">
              <Price filterProduct={filterProduct}  />
              <Color />
              <Size />
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                  <Search />
                  <Products detailProduct={detailProduct} favorateProduct={favorateProduct} products={products} loading={loading}  error={error} ward={ward} pen={pen} />
                  <NextPrev />
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Shop