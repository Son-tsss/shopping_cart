import React from 'react'

const Bill = ({items, usedCoupons, sum, total}) => {
    return <div className = "bill">
        <div className="bill-items">
            <p>Items</p>
            <ol className="bill-items-list">
                {
                    items.map( ({id, sum, finalSum}) => {
                        return <li key={id}>
                            <span>{`${id}    sum: ${sum}    finalSum: ${finalSum}`}</span>
                        </li>
                    })
                }
            </ol>
        </div>

        <div className="bill-price">
            <p>Price</p>
            <p>Sum: {sum}</p>
            <p>Total: {total}</p>
        </div>
    </div>
}

export default Bill