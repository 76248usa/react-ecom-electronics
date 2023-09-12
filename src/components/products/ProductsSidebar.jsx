
import React from 'react'
import './ProductsSidebar.css'
import LinkWithIcon from '../navbar/LinkWithIcon';
import rocket from '../../assets/rocket.png'

function ProductsSidebar() {
  return (
  
       <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
            <LinkWithIcon title="electronics"
            link="products?category=electronics"
            emoji={rocket} sidebar={true} />
        </div>
       </aside>
   
  )
}

export default ProductsSidebar
