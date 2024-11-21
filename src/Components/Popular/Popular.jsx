import React from 'react'
import './Popular.css'
import data_products from '../Assets/data'
import { Item } from '../Item/Item'
export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="item-popular">
            {data_products.map((item,i)=>{
                return <Item key={i}id={item.id}name={item.name}image={item.image}new_price={item.newPrice}old_price={item.oldPrice}/>
            })}
        </div>
    </div>
  )
}
