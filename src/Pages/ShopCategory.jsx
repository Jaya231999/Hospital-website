import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/down-arrow.png'
import { Item } from '../Components/Item/Item'


export const ShopCategory = (props) => {
  const{all_Product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=""/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          sort by<img src={dropdown} alt=""/>
        </div>
      </div>
      <div className="shopcategory-produts">
        {all_Product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i}id={item.id}name={item.name}image={item.image}new_price={item.newPrice}old_price={item.oldPrice}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
export default ShopCategory