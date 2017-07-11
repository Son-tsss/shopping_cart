import React from 'react'
import Product from './product'

const ProductsList = ({products, add}) => {
    return <div className="products-list">
        {
            products.map(product => {
                const {id, price, info} = product

                return <div className="products-list-item" key={id}>
                    <Product info={info} id={id} price={price}/>
                    <button onClick={() => { add({id, price, info})}}> Add to cart </button>
                </div>
            })
        }
    </div>
}

export default ProductsList