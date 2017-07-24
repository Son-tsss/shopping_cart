import {createSelector} from 'reselect'

const getItems = state => state.items

const getCoupons = state => state.coupons

const getItemsWithInfo = createSelector([getItems, getCoupons], (items, coupons) => {
    return items.map(item => {
        const {count, price} = item
        const couponsApplied = coupons.filter(coupon => {
            return coupon.to ? item.id === coupon.to : false
        })

        const discountSum = couponsApplied.reduce((composition, {discount}) => composition * discount, 1)

        return {
            item,
            canDecrement: count > 1,
            couponsApplied,
            sum: count * price,
            finalSum: count * price * discountSum,
            finalPrice: price * discountSum
        }
    })
})

const getCalculatedPrice = createSelector([getItemsWithInfo], items => {
    return items.reduce((bill, item) => {
        const {sum: itemSum, finalSum: itemFinalSum} = item
        const {sum, finalSum} = bill

        return {
            sum: sum + itemSum,
            finalSum: finalSum + itemFinalSum,
        }
    }, {finalSum: 0, sum: 0,})
})


const getUsedCoupons = createSelector([getCoupons, getItems], (coupons, items) => {
    return coupons.filter(coupon => {
            if (coupon.to)
                return items.reduce((apply, item) => apply || item.id === coupon.to, false)
            else
                return true
        }
    )
})

const getCartCoupons = createSelector([getCoupons], coupons => coupons.filter(coupon => !coupon.to))

const getBill = createSelector([getItemsWithInfo, getCalculatedPrice, getCartCoupons], (items, {sum, finalSum}, cartCoupons) => {
    const total = finalSum * cartCoupons.reduce((composition, {discount}) => composition * discount, 1)

    return {
        items,
        cartCoupons,
        sum,
        total
    }
})

export default (state) => {
    return {
        items: getItemsWithInfo(state),
        usedCoupons: getUsedCoupons(state),
        bill: getBill(state)
    }
}