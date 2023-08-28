import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline'

function ProductRatings(props) {
    const startNumber = props.avgRating
    const ratingNumber = props.ratings

  return (
    <div className='flex'>
        {/* for filled stars */}
        {
            Array.from({length: startNumber}, (_, i) => <StarIcon key={i} className='stroke-[#F1B61F] fill-[#F1B61F] h-[20px]'/>)
        }

        {/* for empty stars, hence 5-starNumber and fill has been removed */}
        {
            Array.from({length: 5- startNumber}, (_, i) => <StarIcon key={i} className='stroke-[#F1B61F] h-[20px]'/>)
        }
        <span className='ml-3 text-blue-500'>{ratingNumber} ratings</span>
    </div>
  )
}

export default ProductRatings