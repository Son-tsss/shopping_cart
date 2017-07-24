import React from 'react'
import PropTypes from 'prop-types'

const BillItem = ({id, count, info: {name}, sum, finalSum, couponsApplied}) => {
    return <li key={id}>
        <div className="bill-item">
            <div className="bill-item-ifo">
                <p className="bill-item-name">{name}</p>
                <p className="bill-item-id">{id}</p>
            </div>
            <div className="bill-item-count">
                {count}
            </div>
            <div className="bill-item-discounts">
                {
                    couponsApplied.map(
                        ({id, discount}) => <div className="bill-item-discount">
                            {id}: -{100-100*discount}%
                        </div>
                    )
                }
            </div>
            <div className="bill-item-price">
                <p className={`bill-item-price${finalSum < sum ? " bill-item-price__stroked" : ""}`}>
                    ${sum}
                </p>
                {
                    finalSum < sum && <p className="bill-item-new-price">${finalSum}</p>
                }
            </div>
        </div>
    </li>
}

BillItem.propTypes = {
    id: PropTypes.string.isRequired,
    info: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    count: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired,
    finalSum: PropTypes.number.isRequired,
    couponsApplied: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired
    }))
}

export default BillItem