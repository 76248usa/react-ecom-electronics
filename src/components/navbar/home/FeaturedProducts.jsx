import React from 'react'
import './FeaturedProducts.css'
import ProductsCard from '../../products/ProductsCard'

function FeaturedProducts() {
  return (
    <section className="featured_products">
        <h2>Featured Products</h2>
        <div className="align_center featured_products_list">
           <ProductsCard />
           <ProductsCard />
           <ProductsCard />
        </div>
    </section>
  )
}

export default FeaturedProducts