import React, { useContext } from 'react'
import './ProductDisplay.css'
import starfill_icon from '../Assets/starfill.png'
import stardull_icon from '../Assets/stardull.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img'src={product.image} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-star">
                <img src={starfill_icon} alt=""/>
                <img src={starfill_icon} alt=""/>
                <img src={starfill_icon} alt=""/>
                <img src={starfill_icon} alt=""/>
                <img src={stardull_icon} alt=""/>
                <p>(100)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">${product.oldPrice}</div>
                <div className="productdisplay-right-prices-new">${product.newPrice}</div>
            </div>
            <div className="productdisplay-right-description">
            The company's brand portfolio includes product lines that range from affordable and mass-market to luxurious, high-end style and cater to every age group, from children and youth to men and women. Madura Fashion & Lifestyle is defined by its brands.              
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category:</span>Women , T-Shirt , Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modren , Latest</p>
        </div>
    </div>
  )
}
