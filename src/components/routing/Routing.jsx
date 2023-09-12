import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductsPage from '../../components/products/ProductsPage'
import SingleProductsPage from '../../components/singleProduct/SingleProductsPage'
import CartPage from '../../components/card/CartPage'
import MyOrderPage from '../../components/myOrder/MyOrderPage'
import LoginPage from '../../components/authentication/LoginPage'
import SignUpPage from '../../components/authentication/SignUpPage'
import HomePage from '../navbar/home/HomePage';

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/1" element={<SingleProductsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/myorders" element={<MyOrderPage />} />
    </Routes>
  )
}

export default Routing