import React from 'react'
import PropTypes from 'prop-types'

import BillItem from './bill_item'

const BillItems = ({items}) => {
    return <div className="bill-items">
        <p>Items</p>
        <ol className="bill-items-list">
            {
                items.map( ({item, sum, finalSum, couponsApplied}) => {
                    return <BillItem {...item} sum={sum} finalSum={finalSum} key={item.id} couponsApplied={couponsApplied}/>
                })
            }
        </ol>
    </div>
}

BillItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.shape({
            id: PropTypes.string.isRequired
        }),
        sum: PropTypes.number.isRequired,
        finalSum: PropTypes.number.isRequired,
        couponsApplied: PropTypes.arrayOf(PropTypes.object)
    })).isRequired
}

export default BillItems