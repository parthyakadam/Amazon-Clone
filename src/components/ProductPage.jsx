import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { callAPI } from '../utils/CallApi'
import { ProductDetails } from './'
import { GB_CURRENCY } from '../utils/constants'
import { addToCart } from '../redux/cartSlice'

function ProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState("1")
    const dispatch = useDispatch()

    const getProduct = () => { 
        // calling callAPI function exported from utils/CallAPI file 
        callAPI(`data/products.json`)
        .then((productsResults) => {
            setProduct(productsResults[id])
        })
        // using the result/promise/returned data from callAPI function to set the Product state
    }

    const addQuantityToProduct = () => {
        setProduct(product.quantity = quantity)
        return product
    }

    useEffect(() => {
        getProduct()    
        // calling the getProduct() function when the component is rendered
    }, [])

    if (!product?.title) {
        return <h1>Loading Product...</h1>
        // if product state is empty return this
    }

    // product details will be displayed only when product state is available (not empty)
  return ( product &&
    <div className='h-screen bg-amazonclone-background'>
        <div className='min-w-[1000px] max-w-[1500px] m-auto p-4'>
            <div className="grid grid-cols-10 gap-2">
                {/* Left */}
                <div className='col-span-3 p-8 rounded m-auto bg-white'>
                    <img src={`${product.image}`} alt="" />
                </div>
                {/* Middle */}
                <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400'>
                    <div>
                    <ProductDetails product={product} ratings={true}/>
                    {/* ratings is passed as boolean as we want to display it conditionally */}
                    </div>
                    <div className='text-base xl:text-lg mt-3'>
                        {product.description}
                    </div>
                </div>
                {/* Right */}
                <div className="col-span-2 p-4 rounded bg-white">
                    <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
                        {GB_CURRENCY.format(product.price)}
                    </div>
                    <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
                        RRP:{" "}
                        <span className="line-through">
                            {GB_CURRENCY.format(product.oldPrice)}
                        </span>
                    </div>
                    <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                        FREE Return
                    </div>
                    <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                        FREE Delivery
                    </div>
                    <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                        In Stock
                    </div>
                    <div className='text-base xl:text-lg mt-1'>
                        Quantity:
                        <select onChange={(event) => setQuantity(event.target.value)} className="p-2 bg-white border rounded-md focus:border-indigo-600">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <Link to={'/checkout'}>
                        <button
                            //  sending the product object along with its quantity to addToCart function through dispatch to be processed further in the 'addToCart' reducer 
                            onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                            className='bg-yellow-400 w-full p-3 mt-3 text-xs xl:text-sm rounded hover:bg-yellow-500'>
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage