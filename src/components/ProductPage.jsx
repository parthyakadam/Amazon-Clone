import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const { id } = useParams()

  return (
    <div>
        Product Page: {id}
    </div>
  )
}

export default ProductPage