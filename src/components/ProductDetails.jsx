import React from 'react'
import { ProductBadge, ProductRatings } from './'

function ProductDetails(props) {
  return (
    <div className='mb-1'>
        <div className="text-xl xl:text-2xl font-medium mb-1">
            {props.product.title}
        </div>
        <div className="text-sm xl:text-base mb-1">
            by <span className='text-blue-500'>{props.product.brand}</span>
        </div>
        { props.ratings &&
            <div className="text-sm xl:text-base mb-1"> 
                <ProductRatings 
                    avgRating = {props.product.avgRating} 
                    ratings = {props.product.ratings}
                        //  props drilling and should be avoided 
                /> 
            </div>
        }
        <div className='text-sx xl:text-sm font-bold mb-1'>
            {props.product.attribute}
        </div>
        <div>
            <ProductBadge badge={props.product.badge}/>
        </div>
    </div>
  )
}

export default ProductDetails