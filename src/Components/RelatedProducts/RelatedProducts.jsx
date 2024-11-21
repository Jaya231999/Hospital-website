import React from 'react'
import './RelatedProducts.css'
import data_products from '../Assets/data'
import { Item } from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproducts-items">
            {data_products.map((item,i)=>{
               return <Item key={i}id={item.id}name={item.name}image={item.image}new_price={item.newPrice}old_price={item.oldPrice}/>
            })}
        </div>
    </div>
  )
}
