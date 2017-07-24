import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({count, canDecrement, incrementItem, decrementItem, deleteItem}) => {

    return <div className="shopping-cart-item-counter">
        <button onClick={decrementItem} disabled={!canDecrement} className="shopping-cart-item-counter-decrement"> - </button>
        <span className="shopping-cart-item-counter-count">{count}</span>
        <button onClick={incrementItem} className="shopping-cart-item-counter-increment"> + </button>
        <button onClick={deleteItem} className="shopping-cart-item-counter-delete"> x </button>
    </div>
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    canDecrement: PropTypes.bool.isRequired,
    incrementItem: PropTypes.func.isRequired,
    decrementItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Counter